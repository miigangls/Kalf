import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Alert, StyleSheet, ScrollView } from 'react-native';
import { Container, Content, Text } from 'native-base';
import AppHeader from '../components/common/AppHeader';
import AppButton from '../components/common/AppButton';
import SectionTitle from '../components/common/SectionTitle';
import MoneyText from '../components/common/MoneyText';
import DebtList from '../components/lists/DebtList';
import DebtForm from '../components/forms/DebtForm';
import { addDebt, updateDebt, deleteDebt } from '../store/modules/debts/debtsActions';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  summary: { padding: 12, backgroundColor: colors.light },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 4 },
  label: { color: colors.dark, fontWeight: 'bold' },
  buttonWrap: { padding: 12 },
});

class DebtsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mode: 'list', editing: null };
    this.handleNew = this.handleNew.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleRegisterPayment = this.handleRegisterPayment.bind(this);
  }

  handleNew() {
    this.setState({ mode: 'create', editing: null });
  }

  handleEdit(item) {
    this.setState({ mode: 'edit', editing: item });
  }

  handleCancel() {
    this.setState({ mode: 'list', editing: null });
  }

  async handleSubmit(values) {
    const { mode, editing } = this.state;
    if (mode === 'create') {
      await this.props.addDebt(values);
    } else if (mode === 'edit' && editing) {
      await this.props.updateDebt(editing.id, values);
    }
    this.setState({ mode: 'list', editing: null });
  }

  handleDelete(item) {
    Alert.alert(
      'Eliminar deuda',
      `¿Eliminar "${item.name}"?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Eliminar', style: 'destructive', onPress: () => this.props.deleteDebt(item.id) },
      ]
    );
  }

  // Fallback cross-platform: abrir form en modo edit para registrar el pago.
  handleRegisterPayment(item) {
    this.setState({ mode: 'edit', editing: item });
  }

  renderSummary(totalPending, totalPaid) {
    return (
      <View style={styles.summary}>
        <View style={styles.row}>
          <Text style={styles.label}>Total saldo pendiente</Text>
          <MoneyText amount={totalPending} negative />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Total pagado este mes</Text>
          <MoneyText amount={totalPaid} />
        </View>
      </View>
    );
  }

  render() {
    const { items } = this.props;
    const { mode, editing } = this.state;
    const totalPending = (items || []).reduce((a, x) => a + (Number(x.pendingBalance) || 0), 0);
    const totalPaid = (items || []).reduce((a, x) => a + (Number(x.realPayment) || 0), 0);

    return (
      <Container>
        <AppHeader title="Deudas" />
        {mode === 'list' ? (
          <Content>
            <SectionTitle title="Resumen" />
            {this.renderSummary(totalPending, totalPaid)}
            <View style={styles.buttonWrap}>
              <AppButton label="+ Nueva deuda" onPress={this.handleNew} variant="success" block />
            </View>
            <SectionTitle title="Deudas" />
            <DebtList
              items={items}
              onEdit={this.handleEdit}
              onDelete={this.handleDelete}
              onRegisterPayment={this.handleRegisterPayment}
            />
          </Content>
        ) : (
          <ScrollView>
            <SectionTitle title={mode === 'create' ? 'Nueva deuda' : 'Editar deuda'} />
            <DebtForm
              initialValues={editing}
              onSubmit={this.handleSubmit}
              onCancel={this.handleCancel}
              submitLabel="Guardar"
            />
          </ScrollView>
        )}
      </Container>
    );
  }
}

DebtsScreen.propTypes = {
  items: PropTypes.array.isRequired,
  addDebt: PropTypes.func.isRequired,
  updateDebt: PropTypes.func.isRequired,
  deleteDebt: PropTypes.func.isRequired,
};

const mapState = (state) => ({
  items: state.debts.items,
});

const mapDispatch = {
  addDebt,
  updateDebt,
  deleteDebt,
};

export default connect(mapState, mapDispatch)(DebtsScreen);
