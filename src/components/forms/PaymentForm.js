import React from 'react';
import PropTypes from 'prop-types';
import { View, Switch, StyleSheet } from 'react-native';
import { Form, Item, Label, Input, Picker, Text } from 'native-base';
import AppButton from '../common/AppButton';
import colors from '../../constants/colors';
import { EXPENSE_CATEGORIES } from '../../constants/categories';
import { isRequired, isPositiveNumber, isValidDate } from '../../utils/validators';

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 12 },
  label: { color: colors.gray },
  error: { color: colors.danger, fontSize: 12, paddingHorizontal: 16, paddingTop: 4 },
  actions: { flexDirection: 'row', justifyContent: 'space-between', padding: 16 },
  btn: { flex: 1, marginHorizontal: 4 },
});

class PaymentForm extends React.Component {
  constructor(props) {
    super(props);
    const iv = props.initialValues || {};
    this.state = {
      name: iv.name || '',
      date: iv.date || '',
      budgetAmount: iv.budgetAmount !== undefined ? String(iv.budgetAmount) : '',
      realAmount: iv.realAmount !== undefined ? String(iv.realAmount) : '',
      category: iv.category || 'Hogar',
      isPaid: iv.isPaid || false,
      errors: {},
    };
  }

  setField = (key, value) => {
    this.setState({ [key]: value });
  };

  validate = () => {
    const { name, date, budgetAmount, realAmount } = this.state;
    const errors = {};
    if (!isRequired(name)) errors.name = 'Nombre requerido';
    if (!isValidDate(date)) errors.date = 'Fecha inválida';
    if (!isPositiveNumber(budgetAmount)) errors.budgetAmount = 'Monto presupuestado inválido';
    if (!isPositiveNumber(realAmount)) errors.realAmount = 'Monto real inválido';
    this.setState({ errors });
    return Object.keys(errors).length === 0;
  };

  handleSubmit = () => {
    if (!this.validate()) return;
    const { name, date, budgetAmount, realAmount, category, isPaid } = this.state;
    this.props.onSubmit({
      name,
      date,
      budgetAmount: Number(budgetAmount),
      realAmount: Number(realAmount),
      category,
      isPaid,
    });
  };

  render() {
    const { onCancel, submitLabel } = this.props;
    const { name, date, budgetAmount, realAmount, category, isPaid, errors } = this.state;

    return (
      <View>
        <Form>
          <Item stackedLabel>
            <Label>Nombre</Label>
            <Input value={name} onChangeText={(v) => this.setField('name', v)} />
          </Item>
          {errors.name ? <Text style={styles.error}>{errors.name}</Text> : null}

          <Item stackedLabel>
            <Label>Fecha (YYYY-MM-DD)</Label>
            <Input value={date} onChangeText={(v) => this.setField('date', v)} />
          </Item>
          {errors.date ? <Text style={styles.error}>{errors.date}</Text> : null}

          <Item stackedLabel>
            <Label>Monto presupuestado</Label>
            <Input
              keyboardType="numeric"
              value={budgetAmount}
              onChangeText={(v) => this.setField('budgetAmount', v)}
            />
          </Item>
          {errors.budgetAmount ? <Text style={styles.error}>{errors.budgetAmount}</Text> : null}

          <Item stackedLabel>
            <Label>Monto real</Label>
            <Input
              keyboardType="numeric"
              value={realAmount}
              onChangeText={(v) => this.setField('realAmount', v)}
            />
          </Item>
          {errors.realAmount ? <Text style={styles.error}>{errors.realAmount}</Text> : null}

          <Item picker>
            <Label>Categoría</Label>
            <Picker
              mode="dropdown"
              selectedValue={category}
              onValueChange={(v) => this.setField('category', v)}
            >
              {EXPENSE_CATEGORIES.map((c) => (
                <Picker.Item key={c} label={c} value={c} />
              ))}
            </Picker>
          </Item>

          <View style={styles.row}>
            <Text style={styles.label}>Pagado</Text>
            <Switch value={isPaid} onValueChange={(v) => this.setField('isPaid', v)} />
          </View>
        </Form>

        <View style={styles.actions}>
          {onCancel ? (
            <View style={styles.btn}>
              <AppButton label="Cancelar" variant="light" onPress={onCancel} block />
            </View>
          ) : null}
          <View style={styles.btn}>
            <AppButton label={submitLabel} variant="primary" onPress={this.handleSubmit} block />
          </View>
        </View>
      </View>
    );
  }
}

PaymentForm.propTypes = {
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  submitLabel: PropTypes.string,
};

PaymentForm.defaultProps = {
  initialValues: null,
  onCancel: null,
  submitLabel: 'Guardar',
};

export default PaymentForm;
