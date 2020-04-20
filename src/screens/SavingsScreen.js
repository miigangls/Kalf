import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Alert, StyleSheet, ScrollView } from 'react-native';
import { Container, Content, Text } from 'native-base';
import AppHeader from '../components/common/AppHeader';
import AppButton from '../components/common/AppButton';
import SectionTitle from '../components/common/SectionTitle';
import MoneyText from '../components/common/MoneyText';
import SavingList from '../components/lists/SavingList';
import SavingForm from '../components/forms/SavingForm';
import { addSaving, updateSaving, deleteSaving } from '../store/modules/savings/savingsActions';
import { sum } from '../utils/money';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  summary: { padding: 12, backgroundColor: colors.light },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 4 },
  label: { color: colors.dark, fontWeight: 'bold' },
  buttonWrap: { padding: 12 },
});

class SavingsScreen extends React.Component {
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
      await this.props.addSaving(values);
    } else if (mode === 'edit' && editing) {
      await this.props.updateSaving(editing.id, values);
    }
    this.setState({ mode: 'list', editing: null });
  }

  handleDelete(item) {
    Alert.alert(
      'Eliminar ahorro',
      `¿Eliminar "${item.name}"?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Eliminar', style: 'destructive', onPress: () => this.props.deleteSaving(item.id) },
      ]
    );
  }

  renderSummary(totalBudget, totalReal) {
    return (
      <View style={styles.summary}>
        <View style={styles.row}>
          <Text style={styles.label}>Total meta</Text>
          <MoneyText amount={totalBudget} />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Total ahorrado</Text>
          <MoneyText amount={totalReal} />
        </View>
      </View>
    );
  }

  render() {
    const { items } = this.props;
    const { mode, editing } = this.state;
    const totalBudget = sum(items, 'budgetAmount');
    const totalReal = sum(items, 'realAmount');

    return (
      <Container>
        <AppHeader title="Ahorros" />
        {mode === 'list' ? (
          <Content>
            <SectionTitle title="Resumen" />
            {this.renderSummary(totalBudget, totalReal)}
            <View style={styles.buttonWrap}>
              <AppButton label="+ Nuevo ahorro" onPress={this.handleNew} variant="success" block />
            </View>
            <SectionTitle title="Metas" />
            <SavingList
              items={items}
              onEdit={this.handleEdit}
              onDelete={this.handleDelete}
            />
          </Content>
        ) : (
          <ScrollView>
            <SectionTitle title={mode === 'create' ? 'Nuevo ahorro' : 'Editar ahorro'} />
            <SavingForm
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

SavingsScreen.propTypes = {
  items: PropTypes.array.isRequired,
  addSaving: PropTypes.func.isRequired,
  updateSaving: PropTypes.func.isRequired,
  deleteSaving: PropTypes.func.isRequired,
};

const mapState = (state) => ({
  items: state.savings.items,
});

const mapDispatch = {
  addSaving,
  updateSaving,
  deleteSaving,
};

export default connect(mapState, mapDispatch)(SavingsScreen);
