import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Form, Item, Label, Input, Textarea, Text } from 'native-base';
import AppButton from '../common/AppButton';
import { isRequired, isPositiveNumber } from '../../utils/validators';
import colors from '../../constants/colors';

class DebtForm extends React.Component {
  constructor(props) {
    super(props);
    const iv = props.initialValues || {};
    this.state = {
      name: iv.name || '',
      monthlyBudget: iv.monthlyBudget !== undefined && iv.monthlyBudget !== null ? String(iv.monthlyBudget) : '',
      realPayment: iv.realPayment !== undefined && iv.realPayment !== null ? String(iv.realPayment) : '',
      pendingBalance: iv.pendingBalance !== undefined && iv.pendingBalance !== null ? String(iv.pendingBalance) : '',
      notes: iv.notes || '',
      errors: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field, value) {
    this.setState({ [field]: value });
  }

  validate() {
    const { name, monthlyBudget, realPayment, pendingBalance } = this.state;
    const errors = {};
    if (!isRequired(name)) errors.name = 'Nombre requerido';
    if (!isPositiveNumber(monthlyBudget)) errors.monthlyBudget = 'Presupuesto mensual inválido';
    if (!isPositiveNumber(realPayment)) errors.realPayment = 'Pago real inválido';
    const pb = Number(pendingBalance);
    if (pendingBalance === '' || isNaN(pb) || pb < 0) errors.pendingBalance = 'Saldo pendiente inválido';
    return errors;
  }

  handleSubmit() {
    const errors = this.validate();
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return;
    }
    const { name, monthlyBudget, realPayment, pendingBalance, notes } = this.state;
    this.setState({ errors: {} });
    this.props.onSubmit({
      name: name.trim(),
      monthlyBudget: Number(monthlyBudget),
      realPayment: Number(realPayment),
      pendingBalance: Number(pendingBalance),
      notes,
    });
  }

  render() {
    const { name, monthlyBudget, realPayment, pendingBalance, notes, errors } = this.state;
    const { onCancel, submitLabel } = this.props;
    return (
      <View style={{ padding: 12 }}>
        <Form>
          <Item stackedLabel error={!!errors.name}>
            <Label>Nombre</Label>
            <Input value={name} onChangeText={(v) => this.handleChange('name', v)} />
          </Item>
          {errors.name ? <Text style={{ color: colors.danger, marginLeft: 12 }}>{errors.name}</Text> : null}

          <Item stackedLabel error={!!errors.monthlyBudget}>
            <Label>Presupuesto mensual</Label>
            <Input
              keyboardType="numeric"
              value={monthlyBudget}
              onChangeText={(v) => this.handleChange('monthlyBudget', v)}
            />
          </Item>
          {errors.monthlyBudget ? <Text style={{ color: colors.danger, marginLeft: 12 }}>{errors.monthlyBudget}</Text> : null}

          <Item stackedLabel error={!!errors.realPayment}>
            <Label>Pago real</Label>
            <Input
              keyboardType="numeric"
              value={realPayment}
              onChangeText={(v) => this.handleChange('realPayment', v)}
            />
          </Item>
          {errors.realPayment ? <Text style={{ color: colors.danger, marginLeft: 12 }}>{errors.realPayment}</Text> : null}

          <Item stackedLabel error={!!errors.pendingBalance}>
            <Label>Saldo pendiente</Label>
            <Input
              keyboardType="numeric"
              value={pendingBalance}
              onChangeText={(v) => this.handleChange('pendingBalance', v)}
            />
          </Item>
          {errors.pendingBalance ? <Text style={{ color: colors.danger, marginLeft: 12 }}>{errors.pendingBalance}</Text> : null}

          <Item stackedLabel>
            <Label>Notas</Label>
            <Textarea
              rowSpan={3}
              value={notes}
              onChangeText={(v) => this.handleChange('notes', v)}
              underline={false}
            />
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

DebtForm.propTypes = {
  initialValues: PropTypes.shape({
    name: PropTypes.string,
    monthlyBudget: PropTypes.number,
    realPayment: PropTypes.number,
    pendingBalance: PropTypes.number,
    notes: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  submitLabel: PropTypes.string,
};

DebtForm.defaultProps = {
  initialValues: null,
  onCancel: null,
  submitLabel: 'Guardar',
};

export default DebtForm;
