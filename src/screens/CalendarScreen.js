import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Content, Text } from 'native-base';
import moment from 'moment';
import AppHeader from '../components/common/AppHeader';
import AppCard from '../components/common/AppCard';
import SectionTitle from '../components/common/SectionTitle';
import MoneyText from '../components/common/MoneyText';
import EmptyState from '../components/common/EmptyState';
import colors from '../constants/colors';
import { getDaysInMonth } from '../services/dateService';
import { formatDate } from '../utils/formatters';

const styles = StyleSheet.create({
  weekRow: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 8, paddingTop: 8 },
  weekCell: { width: '14.28%', alignItems: 'center', paddingVertical: 6 },
  weekText: { color: colors.gray, fontSize: 12 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 8 },
  cell: {
    width: '14.28%',
    aspectRatio: 1,
    borderWidth: 0.5,
    borderColor: colors.light,
    padding: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cellSelected: { backgroundColor: colors.light },
  dayNumber: { color: colors.dark, fontSize: 12 },
  dot: { width: 6, height: 6, borderRadius: 3, marginBottom: 4 },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  detailLeft: { flex: 1, paddingRight: 8 },
  detailLabel: { color: colors.dark, fontSize: 13 },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 8,
    marginTop: 8,
    borderTopWidth: 0.5,
    borderTopColor: colors.light,
  },
  totalLabel: { color: colors.dark, fontWeight: 'bold', fontSize: 14 },
  totalValue: { fontSize: 16, fontWeight: 'bold' },
});

const WEEK_DAYS = ['D', 'L', 'M', 'X', 'J', 'V', 'S'];

class CalendarScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedDate: null };
  }

  buildEventsByDate() {
    const { incomes, payments, transactions, currentMonth } = this.props;
    const map = {};
    const ensure = (key) => {
      if (!map[key]) {
        map[key] = { incomes: [], payments: [], transactions: [], total: 0 };
      }
      return map[key];
    };

    incomes.forEach((it) => {
      if (!it.incomeDate) return;
      const key = moment(it.incomeDate).format('YYYY-MM-DD');
      if (key.indexOf(currentMonth) !== 0) return;
      const bucket = ensure(key);
      bucket.incomes.push(it);
      bucket.total += Number(it.realAmount) || 0;
    });

    payments.forEach((it) => {
      if (!it.date) return;
      const key = moment(it.date).format('YYYY-MM-DD');
      if (key.indexOf(currentMonth) !== 0) return;
      const bucket = ensure(key);
      bucket.payments.push(it);
      bucket.total += Number(it.realAmount) || 0;
    });

    transactions.forEach((it) => {
      if (!it.date) return;
      const key = moment(it.date).format('YYYY-MM-DD');
      if (key.indexOf(currentMonth) !== 0) return;
      const bucket = ensure(key);
      bucket.transactions.push(it);
      const amt = Number(it.total) || 0;
      if (it.type === 'expense' || it.type === 'debt') {
        bucket.total -= amt;
      } else if (it.type === 'income') {
        bucket.total += amt;
      }
    });

    return map;
  }

  renderDot(bucket) {
    if (!bucket) return null;
    let color = colors.primary;
    if (bucket.total > 0) color = colors.success;
    else if (bucket.total < 0) color = colors.danger;
    return <View style={[styles.dot, { backgroundColor: color }]} />;
  }

  renderGrid(eventsByDate) {
    const { currentMonth } = this.props;
    const { selectedDate } = this.state;
    const firstDay = moment(currentMonth + '-01');
    const padding = firstDay.day();
    const total = getDaysInMonth(currentMonth);
    const cells = [];

    for (let i = 0; i < padding; i++) {
      cells.push(<View key={`pad-${i}`} style={styles.cell} />);
    }

    for (let d = 1; d <= total; d++) {
      const key = moment(currentMonth + '-01').date(d).format('YYYY-MM-DD');
      const bucket = eventsByDate[key];
      const isSelected = selectedDate === key;
      cells.push(
        <TouchableOpacity
          key={key}
          style={[styles.cell, isSelected && styles.cellSelected]}
          onPress={() => this.setState({ selectedDate: key })}
        >
          <Text style={styles.dayNumber}>{d}</Text>
          {this.renderDot(bucket)}
        </TouchableOpacity>
      );
    }

    return <View style={styles.grid}>{cells}</View>;
  }

  renderDetail(eventsByDate) {
    const { selectedDate } = this.state;
    if (!selectedDate) {
      return <SectionTitle title="Selecciona un día" />;
    }
    const bucket = eventsByDate[selectedDate];
    if (!bucket) {
      return (
        <View style={{ padding: 12 }}>
          <SectionTitle title={formatDate(selectedDate, 'DD MMMM YYYY')} />
          <EmptyState message="Sin movimientos en este día" />
        </View>
      );
    }
    return (
      <View style={{ padding: 12 }}>
        <SectionTitle title={formatDate(selectedDate, 'DD MMMM YYYY')} />
        <AppCard>
          <View style={{ padding: 8 }}>
            {bucket.incomes.map((it) => (
              <View key={`i-${it.id}`} style={styles.detailRow}>
                <View style={styles.detailLeft}>
                  <Text style={styles.detailLabel}>{`Ingreso: ${it.name || ''}`}</Text>
                </View>
                <MoneyText amount={Number(it.realAmount) || 0} />
              </View>
            ))}
            {bucket.payments.map((it) => (
              <View key={`p-${it.id}`} style={styles.detailRow}>
                <View style={styles.detailLeft}>
                  <Text style={styles.detailLabel}>{`Pago: ${it.name || ''}`}</Text>
                </View>
                <MoneyText amount={Number(it.realAmount) || 0} negative />
              </View>
            ))}
            {bucket.transactions.map((it) => {
              const isNeg = it.type === 'expense' || it.type === 'debt';
              return (
                <View key={`t-${it.id}`} style={styles.detailRow}>
                  <View style={styles.detailLeft}>
                    <Text style={styles.detailLabel}>
                      {`${it.category || ''} · ${it.description || ''}`}
                    </Text>
                  </View>
                  <MoneyText amount={Number(it.total) || 0} negative={isNeg} />
                </View>
              );
            })}
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Total del día</Text>
              <MoneyText
                amount={Math.abs(bucket.total)}
                negative={bucket.total < 0}
                style={styles.totalValue}
              />
            </View>
          </View>
        </AppCard>
      </View>
    );
  }

  render() {
    const { currentMonth } = this.props;
    const eventsByDate = this.buildEventsByDate();

    return (
      <Container>
        <AppHeader title="Calendario" subtitle={currentMonth} />
        <Content>
          <View style={styles.weekRow}>
            {WEEK_DAYS.map((d, i) => (
              <View key={`w-${i}`} style={styles.weekCell}>
                <Text style={styles.weekText}>{d}</Text>
              </View>
            ))}
          </View>
          {this.renderGrid(eventsByDate)}
          {this.renderDetail(eventsByDate)}
        </Content>
      </Container>
    );
  }
}

CalendarScreen.propTypes = {
  currentMonth: PropTypes.string.isRequired,
  incomes: PropTypes.array.isRequired,
  payments: PropTypes.array.isRequired,
  transactions: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  currentMonth: state.app.currentMonth,
  incomes: state.incomes.items,
  payments: state.payments.items,
  transactions: state.transactions.items,
});

export default connect(mapStateToProps)(CalendarScreen);
