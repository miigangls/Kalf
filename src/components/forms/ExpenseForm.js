import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Form, Item, Label, Input, Picker, Text } from 'native-base';
import AppButton from '../common/AppButton';
import { EXPENSE_CATEGORIES } from '../../constants/categories';
import { isRequired, isPositiveNumber } from '../../utils/validators';
import colors from '../../constants/colors';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    const iv = props.initialValues || {};
    this.state = {
      name: iv.name || '',
      budgetAmount: iv.budgetAmount !== undefined && iv.budgetAmount !== null ? String(iv.budgetAmount) : '',
      realAmount: iv.realAmount !== undefined && iv.realAmount !== null ? String(iv.realAmount) : '',
      category: iv.category || 'Alimentación',
      errors: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field, value) {
    this.setState({ [field]: value });
  }

  handleCategoryChange(value) {
    this.setState({ category: value });
  }

  validate() {
    const { name, budgetAmount, realAmount } = this.state;
    const errors = {};
    if (!isRequired(name)) errors.name = 'Nombre requerido';
    if (!isPositiveNumber(budgetAmount)) errors.budgetAmount = 'Monto presupuestado inválido';
    if (!isPositiveNumber(realAmount)) errors.realAmount = 'Monto real inválido';
    return errors;
  }

  handleSubmit() {
    const errors = this.validate();
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return;
    }
    const { name, budgetAmount, realAmount, category } = this.state;
    this.setState({ errors: {} });
    this.props.onSubmit({
      name: name.trim(),
      budgetAmount: Number(budgetAmount),
      realAmount: Number(realAmount),
      category,
    });
  }

  render() {
    const { name, budgetAmount, realAmount, category, errors } = this.state;
    const { onCancel, submitLabel } = this.props;
    return (
      <View style={{ padding: 12 }}>
        <Form>
          <Item stackedLabel error={!!errors.name}>
            <Label>Nombre</Label>
            <Input value={name} onChangeText={(v) => this.handleChange('name', v)} />
          </Item>
          {errors.name ? <Text style={{ color: colors.danger, marginLeft: 12 }}>{errors.name}</Text> : null}

          <Item stackedLabel error={!!errors.budgetAmount}>
            <Label>Monto presupuestado</Label>
            <Input
              keyboardType="numeric"
              value={budgetAmount}
              onChangeText={(v) => this.handleChange('budgetAmount', v)}
            />
          </Item>
          {errors.budgetAmount ? <Text style={{ color: colors.danger, marginLeft: 12 }}>{errors.budgetAmount}</Text> : null}

          <Item stackedLabel error={!!errors.realAmount}>
            <Label>Monto real</Label>
            <Input
              keyboardType="numeric"
              value={realAmount}
              onChangeText={(v) => this.handleChange('realAmount', v)}
            />
          </Item>
          {errors.realAmount ? <Text style={{ color: colors.danger, marginLeft: 12 }}>{errors.realAmount}</Text> : null}

          <Item picker stackedLabel>
            <Label>Categoría</Label>
            <Picker
              mode="dropdown"
              selectedValue={category}
              onValueChange={this.handleCategoryChange}
            >
              {EXPENSE_CATEGORIES.map((c) => (
                <Picker.Item key={c} label={c} value={c} />
              ))}
            </Picker>
          </Item>
        </Form>

        <View style={{ flexDirection: 'row', marginTop: 16, justifyContent: 'space-between' }}>
          <View style={{ flex: 1, marginRight: 6 }}>
            <AppButton label={submitLabel} onPress={this.handleSubmit} variant="primary" block />
          </View>
          {onCancel ? (
            <View style={{ flex: 1, marginLeft: 6 }}>
              <AppButton label="Cancelar" onPress={onCancel} variant="light" block />
            </View>
          ) : null}
        </View>
      </View>
    );
  }
}

ExpenseForm.propTypes = {
  initialValues: PropTypes.shape({
    name: PropTypes.string,
    budgetAmount: PropTypes.number,
    realAmount: PropTypes.number,
    category: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  submitLabel: PropTypes.string,
};

ExpenseForm.defaultProps = {
  initialValues: null,
  onCancel: null,
  submitLabel: 'Guardar',
};

export default ExpenseForm;
