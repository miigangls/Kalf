import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Container, Content, Text, Spinner } from 'native-base';
import AppHeader from '../components/common/AppHeader';
import AppCard from '../components/common/AppCard';
import MoneyText from '../components/common/MoneyText';
import SectionTitle from '../components/common/SectionTitle';
import EmptyState from '../components/common/EmptyState';
import MonthSwitcher from '../components/common/MonthSwitcher';
import colors from '../constants/colors';
import {
  calculateMonthlySummary,
  calculateExpensePercentage,
} from '../services/financeCalculator';
import { formatDate, formatPercent } from '../utils/formatters';

const styles = StyleSheet.create({
  grid: { flexDirection: 'row', flexWrap: 'wrap', padding: 8 },
  cell: { width: '50%', padding: 4 },
  cardInner: { flexDirection: 'column', padding: 8 },
  label: { color: colors.gray, fontSize: 12, marginBottom: 4 },
  big: { fontSize: 18, fontWeight: 'bold', color: colors.dark },
  txRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 6 },
  txLeft: { flex: 1 },
  txCat: { color: colors.gray, fontSize: 11 },
  loading: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 32 },
});

const Cell = ({ label, amount, negative }) => (
  <View style={styles.cell}>
    <AppCard>
      <View style={styles.cardInner}>
        <Text style={styles.label}>{label}</Text>
        <MoneyText amount={amount} negative={negative} style={styles.big} />
      </View>
    </AppCard>
  </View>
);

Cell.propTypes = {
  label: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  negative: PropTypes.bool,
};
Cell.defaultProps = { negative: false };

class DashboardScreen extends React.Component {
  render() {
    const { loading, currentMonth, userName, monthData } = this.props;

    if (loading) {
      return (
        <Container>
          <AppHeader title="Resumen" subtitle={currentMonth} />
          <View style={styles.loading}>
            <Spinner color={colors.primary} />
            <Text style={{ color: colors.gray }}>Cargando datos...</Text>
          </View>
        </Container>
      );
    }

    const summary = calculateMonthlySummary(monthData);
    const totalExpenses = summary.totalExpenses + summary.totalPayments;
    const budgetUsedPct = summary.totalRealIncomes > 0
      ? calculateExpensePercentage(totalExpenses, summary.totalRealIncomes)
      : 0;

    const lastTx = (monthData.transactions || [])
      .slice()
      .sort((a, b) => (a.date < b.date ? 1 : -1))
      .slice(0, 5);

    return (
      <Container>
        <AppHeader title={`Hola, ${userName}`} subtitle={currentMonth} />
        <MonthSwitcher />
        <Content>
          <SectionTitle title={`Mes ${currentMonth}`} />
          <View style={styles.grid}>
            <Cell label="Ingresos reales" amount={summary.totalRealIncomes} />
            <Cell label="Gastos totales" amount={totalExpenses} negative />
            <Cell label="Ahorrado" amount={summary.totalSavings} />
            <Cell label="Deudas pagadas" amount={summary.totalDebtsPaid} />
            <Cell label="Disponible para gastar" amount={summary.availableToSpend} />
            <Cell label="Disponible para presupuestar" amount={summary.availableToBudget} />
          </View>

          <SectionTitle title={`Presupuesto usado: ${formatPercent(budgetUsedPct)}`} />

          <SectionTitle title="Últimas transacciones" />
          <View style={{ paddingHorizontal: 12 }}>
            {lastTx.length === 0 ? (
              <EmptyState message="Aún no hay transacciones" />
            ) : (
              lastTx.map((t) => (
                <View key={t.id} style={styles.txRow}>
                  <View style={styles.txLeft}>
                    <Text>{t.description || t.category}</Text>
                    <Text style={styles.txCat}>{`${t.category} · ${formatDate(t.date)}`}</Text>
                  </View>
                  <MoneyText amount={t.total} negative={t.type === 'expense'} />
                </View>
              ))
            )}
          </View>
        </Content>
      </Container>
    );
  }
}

DashboardScreen.propTypes = {
  loading: PropTypes.bool.isRequired,
  currentMonth: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  monthData: PropTypes.shape({
    incomes: PropTypes.array,
    payments: PropTypes.array,
    expenses: PropTypes.array,
    savings: PropTypes.array,
    debts: PropTypes.array,
    transactions: PropTypes.array,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.app.loading,
  currentMonth: state.app.currentMonth,
  userName: state.app.userName,
  monthData: {
    incomes: state.incomes.items,
    payments: state.payments.items,
    expenses: state.expenses.items,
    savings: state.savings.items,
    debts: state.debts.items,
    transactions: state.transactions.items,
  },
});

export default connect(mapStateToProps)(DashboardScreen);
