import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, StyleSheet, Alert } from 'react-native';
import { Container, Content, Text } from 'native-base';
import AppHeader from '../components/common/AppHeader';
import AppCard from '../components/common/AppCard';
import AppButton from '../components/common/AppButton';
import MoneyText from '../components/common/MoneyText';
import SectionTitle from '../components/common/SectionTitle';
import PaymentForm from '../components/forms/PaymentForm';
import PaymentList from '../components/lists/PaymentList';
import colors from '../constants/colors';
import {
  addPayment,
  updatePayment,
  deletePayment,
} from '../store/modules/payments/paymentsActions';

const styles = StyleSheet.create({
  summary: { flexDirection: 'row', padding: 8 },
  cell: { flex: 1, padding: 4 },
  cardInner: { flexDirection: 'column', padding: 8 },
  label: { color: colors.gray, fontSize: 12, marginBottom: 4 },
  big: { fontSize: 18, fontWeight: 'bold', color: colors.dark },
  newBtnWrap: { padding: 12 },
});

class ScheduledPaymentsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mode: 'list', editing: null };
  }

  goCreate = () => this.setState({ mode: 'create', editing: null });

  goEdit = (item) => this.setState({ mode: 'edit', editing: item });

  goList = () => this.setState({ mode: 'list', editing: null });

  handleCreate = (values) => {
    this.props.addPayment(values);
    this.goList();
  };

  handleUpdate = (values) => {
    const { editing } = this.state;
    if (!editing) return;
    this.props.updatePayment(editing.id, values);
    this.goList();
  };

  handleTogglePaid = (item) => {
    this.props.updatePayment(item.id, { isPaid: !item.isPaid });
  };

  handleDelete = (item) => {
    Alert.alert(
      'Eliminar pago',
      `¿Eliminar "${item.name}"?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Eliminar', style: 'destructive', onPress: () => this.props.deletePayment(item.id) },
      ]
    );
  };

  renderSummary() {
    const { items } = this.props;
    const totalBudget = items.reduce((a, x) => a + (Number(x.budgetAmount) || 0), 0);
    const totalReal = items.reduce((a, x) => a + (Number(x.realAmount) || 0), 0);
    return (
      <View style={styles.summary}>
        <View style={styles.cell}>
          <AppCard>
            <View style={styles.cardInner}>
              <Text style={styles.label}>Presupuestado</Text>
              <MoneyText amount={totalBudget} style={styles.big} />
            </View>
          </AppCard>
        </View>
        <View style={styles.cell}>
          <AppCard>
            <View style={styles.cardInner}>
              <Text style={styles.label}>Real</Text>
              <MoneyText amount={totalReal} style={styles.big} negative />
            </View>
          </AppCard>
        </View>
      </View>
    );
  }

  render() {
    const { items } = this.props;
    const { mode, editing } = this.state;

    return (
      <Container>
        <AppHeader title="Pagos programados" />
        <Content>
          {mode === 'list' ? (
            <View>
              <SectionTitle title="Resumen" />
              {this.renderSummary()}
              <View style={styles.newBtnWrap}>
                <AppButton label="Nuevo pago" variant="primary" onPress={this.goCreate} block />
              </View>
              <SectionTitle title="Pagos" />
              <PaymentList
                items={items}
                onEdit={this.goEdit}
                onDelete={this.handleDelete}
                onTogglePaid={this.handleTogglePaid}
              />
            </View>
          ) : null}

          {mode === 'create' ? (
            <View>
              <SectionTitle title="Nuevo pago" />
              <PaymentForm
                onSubmit={this.handleCreate}
                onCancel={this.goList}
                submitLabel="Crear"
              />
            </View>
          ) : null}

          {mode === 'edit' && editing ? (
            <View>
              <SectionTitle title="Editar pago" />
              <PaymentForm
                initialValues={editing}
                onSubmit={this.handleUpdate}
                onCancel={this.goList}
                submitLabel="Actualizar"
              />
            </View>
          ) : null}
        </Content>
      </Container>
    );
  }
}

ScheduledPaymentsScreen.propTypes = {
  items: PropTypes.array.isRequired,
  addPayment: PropTypes.func.isRequired,
  updatePayment: PropTypes.func.isRequired,
  deletePayment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  items: state.payments.items,
});

const mapDispatchToProps = { addPayment, updatePayment, deletePayment };

export default connect(mapStateToProps, mapDispatchToProps)(ScheduledPaymentsScreen);
