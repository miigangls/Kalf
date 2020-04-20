import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Form, Item, Label, Input, Text } from 'native-base';
import AppButton from '../common/AppButton';
import { isRequired, isPositiveNumber, isValidDate } from '../../utils/validators';
import colors from '../../constants/colors';

class SavingForm extends React.Component {
  constructor(props) {
    super(props);
    const iv = props.initialValues || {};
    this.state = {
      name: iv.name || '',
      budgetAmount: iv.budgetAmount !== undefined && iv.budgetAmount !== null ? String(iv.budgetAmount) : '',
      realAmount: iv.realAmount !== undefined && iv.realAmount !== null ? String(iv.realAmount) : '',
      targetDate: iv.targetDate || '',
      errors: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field, value) {
    this.setState({ [field]: value });
  }

  validate() {
    const { name, budgetAmount, realAmount, targetDate } = this.state;
    const errors = {};
    if (!isRequired(name)) errors.name = 'Nombre requerido';
    if (!isPositiveNumber(budgetAmount)) errors.budgetAmount = 'Meta inválida';
    if (!isPositiveNumber(realAmount)) errors.realAmount = 'Monto ahorrado inválido';
    if (isRequired(targetDate) && !isValidDate(targetDate)) {
      errors.targetDate = 'Fecha inválida (YYYY-MM-DD)';
    }
    return errors;
  }

  handleSubmit() {
    const errors = this.validate();
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return;
    }
    const { name, budgetAmount, realAmount, targetDate } = this.state;
    this.setState({ errors: {} });
    this.props.onSubmit({
      name: name.trim(),
      budgetAmount: Number(budgetAmount),
      realAmount: Number(realAmount),
      targetDate: isRequired(targetDate) ? targetDate.trim() : '',
    });
  }

  render() {
    const { name, budgetAmount, realAmount, targetDate, errors } = this.state;
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
            <Label>Meta</Label>
            <Input
              keyboardType="numeric"
              value={budgetAmount}
              onChangeText={(v) => this.handleChange('budgetAmount', v)}
            />
          </Item>
          {errors.budgetAmount ? <Text style={{ color: colors.danger, marginLeft: 12 }}>{errors.budgetAmount}</Text> : null}

          <Item stackedLabel error={!!errors.realAmount}>
            <Label>Ahorrado</Label>
            <Input
              keyboardType="numeric"
              value={realAmount}
              onChangeText={(v) => this.handleChange('realAmount', v)}
            />
          </Item>
          {errors.realAmount ? <Text style={{ color: colors.danger, marginLeft: 12 }}>{errors.realAmount}</Text> : null}

          <Item stackedLabel error={!!errors.targetDate}>
            <Label>Fecha objetivo (YYYY-MM-DD)</Label>
            <Input
              value={targetDate}
              onChangeText={(v) => this.handleChange('targetDate', v)}
              autoCapitalize="none"
            />
          </Item>
          {errors.targetDate ? <Text style={{ color: colors.danger, marginLeft: 12 }}>{errors.targetDate}</Text> : null}
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

SavingForm.propTypes = {
  initialValues: PropTypes.shape({
    name: PropTypes.string,
    budgetAmount: PropTypes.number,
    realAmount: PropTypes.number,
    targetDate: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  submitLabel: PropTypes.string,
};

SavingForm.defaultProps = {
  initialValues: null,
  onCancel: null,
  submitLabel: 'Guardar',
};

export default SavingForm;
