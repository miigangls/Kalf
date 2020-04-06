import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Form, Item, Label, Input, Textarea, Text } from 'native-base';
import AppButton from '../common/AppButton';
import { isRequired, isPositiveNumber, isValidDate } from '../../utils/validators';
import colors from '../../constants/colors';

class IncomeForm extends Component {
  constructor(props) {
    super(props);
    const v = props.initialValues || {};
    this.state = {
      name: v.name || '',
      incomeDate: v.incomeDate || '',
      expectedAmount: v.expectedAmount !== undefined && v.expectedAmount !== null ? String(v.expectedAmount) : '',
      realAmount: v.realAmount !== undefined && v.realAmount !== null ? String(v.realAmount) : '',
      startDate: v.startDate || '',
      notes: v.notes || '',
      errors: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validate() {
    const { name, incomeDate, expectedAmount, realAmount, startDate } = this.state;
    const errors = {};
    if (!isRequired(name)) errors.name = 'El nombre es requerido';
    if (!isPositiveNumber(expectedAmount)) errors.expectedAmount = 'Monto esperado inválido';
    if (!isPositiveNumber(realAmount)) errors.realAmount = 'Monto real inválido';
    if (!isValidDate(incomeDate)) errors.incomeDate = 'Fecha inválida';
    if (!isValidDate(startDate)) errors.startDate = 'Fecha inválida';
    return errors;
  }

  handleSubmit() {
    const errors = this.validate();
    this.setState({ errors });
    if (Object.keys(errors).length > 0) return;
    const { name, incomeDate, expectedAmount, realAmount, startDate, notes } = this.state;
    this.props.onSubmit({
      name,
      incomeDate,
      expectedAmount: Number(expectedAmount),
      realAmount: Number(realAmount),
      startDate,
      notes,
    });
  }

  renderError(field) {
    const { errors } = this.state;
    if (!errors[field]) return null;
    return <Text style={{ color: colors.danger, fontSize: 12, marginLeft: 16 }}>{errors[field]}</Text>;
  }

  render() {
    const { name, incomeDate, expectedAmount, realAmount, startDate, notes } = this.state;
    const { onCancel, submitLabel } = this.props;
    return (
      <Form>
        <Item stackedLabel>
          <Label>Nombre</Label>
          <Input value={name} onChangeText={(t) => this.setState({ name: t })} />
        </Item>
        {this.renderError('name')}
        <Item stackedLabel>
          <Label>Fecha ingreso</Label>
          <Input
            placeholder="YYYY-MM-DD"
            value={incomeDate}
            onChangeText={(t) => this.setState({ incomeDate: t })}
          />
        </Item>
        {this.renderError('incomeDate')}
        <Item stackedLabel>
          <Label>Esperado</Label>
          <Input
            keyboardType="numeric"
            value={expectedAmount}
            onChangeText={(t) => this.setState({ expectedAmount: t })}
          />
        </Item>
        {this.renderError('expectedAmount')}
        <Item stackedLabel>
          <Label>Real</Label>
          <Input
            keyboardType="numeric"
            value={realAmount}
            onChangeText={(t) => this.setState({ realAmount: t })}
          />
        </Item>
        {this.renderError('realAmount')}
        <Item stackedLabel>
          <Label>Fecha inicio</Label>
          <Input
            placeholder="YYYY-MM-DD"
            value={startDate}
            onChangeText={(t) => this.setState({ startDate: t })}
          />
        </Item>
        {this.renderError('startDate')}
        <View style={{ padding: 8 }}>
          <Textarea
            rowSpan={3}
            bordered
            placeholder="Notas"
            value={notes}
            onChangeText={(t) => this.setState({ notes: t })}
          />
        </View>
        <View style={{ padding: 8 }}>
          <AppButton label={submitLabel} onPress={this.handleSubmit} variant="primary" block />
        </View>
        {onCancel ? (
          <View style={{ padding: 8 }}>
            <AppButton label="Cancelar" onPress={onCancel} variant="light" block />
          </View>
        ) : null}
      </Form>
    );
  }
}

IncomeForm.propTypes = {
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  submitLabel: PropTypes.string,
};

IncomeForm.defaultProps = {
  initialValues: null,
  onCancel: null,
  submitLabel: 'Guardar',
};

export default IncomeForm;
