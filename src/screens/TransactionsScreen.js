import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert, View } from 'react-native';
import { Container, Content, Item, Picker, Text } from 'native-base';
import { connect } from 'react-redux';
import AppHeader from '../components/common/AppHeader';
import AppButton from '../components/common/AppButton';
import SectionTitle from '../components/common/SectionTitle';
import MoneyText from '../components/common/MoneyText';
import TransactionList from '../components/lists/TransactionList';
import TransactionForm from '../components/forms/TransactionForm';
import {
  addTransaction,
  updateTransaction,
  deleteTransaction,
} from '../store/modules/transactions/transactionsActions';
import categories from '../constants/categories';
import { calculateCategoryTotals } from '../services/financeCalculator';

const TYPE_LABELS = {
  income: 'Ingreso',
  expense: 'Gasto',
  saving: 'Ahorro',
  debt: 'Deuda',
};

class TransactionsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'list',
      editing: null,
      filterType: null,
      filterCategory: null,
    };
    this.goList = this.goList.bind(this);
    this.goCreate = this.goCreate.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
  }

  goList() {
    this.setState({ mode: 'list', editing: null });
  }

  goCreate() {
    this.setState({ mode: 'create', editing: null });
  }

  handleEdit(item) {
    this.setState({ mode: 'edit', editing: item });
  }

  handleDelete(item) {
    Alert.alert('Eliminar movimiento', 'Estas seguro?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Eliminar',
        style: 'destructive',
        onPress: () => this.props.deleteTransaction(item.id),
      },
    ]);
  }

  handleSubmit(values) {
    const { mode, editing } = this.state;
    if (mode === 'edit' && editing) {
      this.props.updateTransaction(editing.id, values);
    } else {
      this.props.addTransaction(values);
    }
    this.goList();
  }

  clearFilters() {
    this.setState({ filterType: null, filterCategory: null });
  }

  applyFilters(items) {
    const { filterType, filterCategory } = this.state;
    return items.filter((it) => {
      if (filterType && it.type !== filterType) return false;
      if (filterCategory && it.category !== filterCategory) return false;
      return true;
    });
  }

  render() {
    const { items } = this.props;
    const { mode, editing, filterType, filterCategory } = this.state;
    const filtered = this.applyFilters(items);
    const categoryTotals = calculateCategoryTotals(items) || {};
    const hasFilters = filterType !== null || filterCategory !== null;
    return (
      <Container>
        <AppHeader title="Movimientos" />
        <Content padder>
          {mode === 'list' ? (
            <View>
              <SectionTitle title="Filtros" />
              <Item picker>
                <Picker
                  mode="dropdown"
                  selectedValue={filterType === null ? '__all__' : filterType}
                  onValueChange={(v) =>
                    this.setState({ filterType: v === '__all__' ? null : v })
                  }
                >
                  <Picker.Item label="Todos" value="__all__" />
                  <Picker.Item label="Ingreso" value="income" />
                  <Picker.Item label="Gasto" value="expense" />
                  <Picker.Item label="Ahorro" value="saving" />
                  <Picker.Item label="Deuda" value="debt" />
                </Picker>
              </Item>
              <Item picker>
                <Picker
                  mode="dropdown"
                  selectedValue={filterCategory === null ? '__all__' : filterCategory}
                  onValueChange={(v) =>
                    this.setState({ filterCategory: v === '__all__' ? null : v })
                  }
                >
                  <Picker.Item label="Todas" value="__all__" />
                  {categories.map((c) => (
                    <Picker.Item key={c} label={c} value={c} />
                  ))}
                </Picker>
              </Item>
              {hasFilters ? (
                <View style={{ marginTop: 8 }}>
                  <AppButton
                    label="Limpiar filtros"
                    onPress={this.clearFilters}
                    variant="light"
                    block
                  />
                </View>
              ) : null}

              <SectionTitle title="Totales por categoría" />
              <View style={{ marginBottom: 12 }}>
                {Object.keys(categoryTotals).length === 0 ? (
                  <Text style={{ color: '#888' }}>Sin datos</Text>
                ) : (
                  Object.keys(categoryTotals).map((cat) => (
                    <View
                      key={cat}
                      style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 4 }}
                    >
                      <Text>{cat}</Text>
                      <MoneyText amount={Number(categoryTotals[cat]) || 0} />
                    </View>
                  ))
                )}
              </View>

              <SectionTitle title="Movimientos" />
              <TransactionList
                items={filtered}
                onEdit={this.handleEdit}
                onDelete={this.handleDelete}
              />

              <View style={{ marginTop: 12 }}>
                <AppButton
                  label="+ Nuevo movimiento"
                  onPress={this.goCreate}
                  variant="primary"
                  block
                />
              </View>
            </View>
          ) : (
            <TransactionForm
              initialValues={mode === 'edit' ? editing : null}
              onSubmit={this.handleSubmit}
              onCancel={this.goList}
              submitLabel={mode === 'edit' ? 'Actualizar' : 'Guardar'}
            />
          )}
        </Content>
      </Container>
    );
  }
}

TransactionsScreen.propTypes = {
  items: PropTypes.array.isRequired,
  addTransaction: PropTypes.func.isRequired,
  updateTransaction: PropTypes.func.isRequired,
  deleteTransaction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  items: state.transactions.items,
});

const mapDispatchToProps = { addTransaction, updateTransaction, deleteTransaction };

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsScreen);
