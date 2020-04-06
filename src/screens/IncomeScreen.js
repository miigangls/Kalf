import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert, View } from 'react-native';
import { Container, Content, Text } from 'native-base';
import { connect } from 'react-redux';
import AppHeader from '../components/common/AppHeader';
import AppButton from '../components/common/AppButton';
import SectionTitle from '../components/common/SectionTitle';
import MoneyText from '../components/common/MoneyText';
import IncomeList from '../components/lists/IncomeList';
import IncomeForm from '../components/forms/IncomeForm';
import { addIncome, updateIncome, deleteIncome } from '../store/modules/incomes/incomesActions';
import { sum } from '../utils/money';

class IncomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { mode: 'list', editing: null };
    this.goList = this.goList.bind(this);
    this.goCreate = this.goCreate.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    Alert.alert(
      'Eliminar ingreso',
      'Estas seguro?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Eliminar', style: 'destructive', onPress: () => this.props.deleteIncome(item.id) },
      ]
    );
  }

  handleSubmit(values) {
    const { mode, editing } = this.state;
    if (mode === 'edit' && editing) {
      this.props.updateIncome(editing.id, values);
    } else {
      this.props.addIncome(values);
    }
    this.goList();
  }

  render() {
    const { items } = this.props;
    const { mode, editing } = this.state;
    const totalExpected = sum(items, 'expectedAmount');
    const totalReal = sum(items, 'realAmount');
    return (
      <Container>
        <AppHeader title="Ingresos" />
        <Content padder>
          {mode === 'list' ? (
            <View>
              <SectionTitle title="Resumen" />
              <View style={{ marginBottom: 12 }}>
                <Text>Total esperado:</Text>
                <MoneyText value={totalExpected} />
                <Text>Total real:</Text>
                <MoneyText value={totalReal} />
              </View>
              <IncomeList items={items} onEdit={this.handleEdit} onDelete={this.handleDelete} />
              <View style={{ marginTop: 12 }}>
                <AppButton label="+ Nuevo ingreso" onPress={this.goCreate} variant="primary" block />
              </View>
            </View>
          ) : (
            <IncomeForm
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

IncomeScreen.propTypes = {
  items: PropTypes.array.isRequired,
  addIncome: PropTypes.func.isRequired,
  updateIncome: PropTypes.func.isRequired,
  deleteIncome: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  items: state.incomes.items,
});

const mapDispatchToProps = { addIncome, updateIncome, deleteIncome };

export default connect(mapStateToProps, mapDispatchToProps)(IncomeScreen);
