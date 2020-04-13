import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Alert, StyleSheet, ScrollView } from 'react-native';
import { Container, Content, Text } from 'native-base';
import AppHeader from '../components/common/AppHeader';
import AppButton from '../components/common/AppButton';
import SectionTitle from '../components/common/SectionTitle';
import MoneyText from '../components/common/MoneyText';
import ExpenseList from '../components/lists/ExpenseList';
import ExpenseForm from '../components/forms/ExpenseForm';
import { addExpense, updateExpense, deleteExpense } from '../store/modules/expenses/expensesActions';
import { calculateTotalExpenses } from '../services/financeCalculator';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  summary: { padding: 12, backgroundColor: colors.light },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 4 },
  label: { color: colors.dark, fontWeight: 'bold' },
  buttonWrap: { padding: 12 },
});

class MonthlyExpensesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mode: 'list', editing: null };
    this.handleNew = this.handleNew.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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
      await this.props.addExpense(values);
    } else if (mode === 'edit' && editing) {
      await this.props.updateExpense(editing.id, values);
    }
    this.setState({ mode: 'list', editing: null });
  }

  handleDelete(item) {
    Alert.alert(
      'Eliminar gasto',
      `¿Eliminar "${item.name}"?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Eliminar', style: 'destructive', onPress: () => this.props.deleteExpense(item.id) },
      ]
    );
  }

  renderSummary(totalBudget, totalReal) {
    return (
      <View style={styles.summary}>
        <View style={styles.row}>
          <Text style={styles.label}>Total presupuestado</Text>
          <MoneyText amount={totalBudget} />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Total real</Text>
          <MoneyText amount={totalReal} negative />
        </View>
      </View>
    );
  }

  render() {
    const { items } = this.props;
    const { mode, editing } = this.state;
    const totalReal = calculateTotalExpenses(items);
    const totalBudget = (items || []).reduce((a, x) => a + (Number(x.budgetAmount) || 0), 0);

    return (
      <Container>
        <AppHeader title="Gastos mensuales" />
        {mode === 'list' ? (
          <Content>
            <SectionTitle title="Resumen" />
            {this.renderSummary(totalBudget, totalReal)}
            <View style={styles.buttonWrap}>
              <AppButton label="+ Nuevo gasto" onPress={this.handleNew} variant="success" block />
            </View>
            <SectionTitle title="Gastos" />
            <ExpenseList
              items={items}
              totalReal={totalReal}
              onEdit={this.handleEdit}
              onDelete={this.handleDelete}
            />
          </Content>
        ) : (
          <ScrollView>
            <SectionTitle title={mode === 'create' ? 'Nuevo gasto' : 'Editar gasto'} />
            <ExpenseForm
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

MonthlyExpensesScreen.propTypes = {
  items: PropTypes.array.isRequired,
  addExpense: PropTypes.func.isRequired,
  updateExpense: PropTypes.func.isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

const mapState = (state) => ({
  items: state.expenses.items,
});

const mapDispatch = {
  addExpense,
  updateExpense,
  deleteExpense,
};

export default connect(mapState, mapDispatch)(MonthlyExpensesScreen);
