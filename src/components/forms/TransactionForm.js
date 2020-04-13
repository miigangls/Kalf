import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import moment from 'moment';
import { Form, Item, Label, Input, Textarea, Picker, Text } from 'native-base';
import AppButton from '../common/AppButton';
import { isRequired, isPositiveNumber, isValidDate } from '../../utils/validators';
import categories, { TRANSACTION_TYPES } from '../../constants/categories';
import colors from '../../constants/colors';

const TYPE_LABELS = {
  income: 'Ingreso',
  expense: 'Gasto',
  saving: 'Ahorro',
  debt: 'Deuda',
};

class TransactionForm extends Component {
  constructor(props) {
    super(props);
    const v = props.initialValues || {};
    this.state = {
      date: v.date || moment().format('YYYY-MM-DD'),
      total: v.total !== undefined && v.total !== null ? String(v.total) : '',
      type: v.type || 'expense',
      category: v.category || 'Alimentación',
      description: v.description || '',
      errors: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validate() {
    const { date, total, type, category } = this.state;
    const errors = {};
    if (!isValidDate(date)) errors.date = 'Fecha inválida';
    if (!isPositiveNumber(total)) errors.total = 'Monto inválido';
    if (!isRequired(type)) errors.type = 'Tipo requerido';
    if (!isRequired(category)) errors.category = 'Categoría requerida';
    return errors;
  }

  handleSubmit() {
    const errors = this.validate();
    this.setState({ errors });
    if (Object.keys(errors).length > 0) return;
    const { date, total, type, category, description } = this.state;
    this.props.onSubmit({
      date,
      total: Number(total),
      type,
      category,
      description,
    });
  }

  renderError(field) {
    const { errors } = this.state;
    if (!errors[field]) return null;
    return (
      <Text style={{ color: colors.danger, fontSize: 12, marginLeft: 16 }}>
        {errors[field]}
      </Text>
    );
  }

  render() {
    const { date, total, type, category, description } = this.state;
    const { onCancel, submitLabel } = this.props;
    return (
      <Form>
        <Item stackedLabel>
          <Label>Fecha</Label>
          <Input
            placeholder="YYYY-MM-DD"
            value={date}
            onChangeText={(t) => this.setState({ date: t })}
          />
        </Item>
        {this.renderError('date')}
        <Item stackedLabel>
          <Label>Total</Label>
          <Input
            keyboardType="numeric"
            value={total}
            onChangeText={(t) => this.setState({ total: t })}
          />
        </Item>
        {this.renderError('total')}
        <Item picker>
          <Label>Tipo</Label>
          <Picker
            mode="dropdown"
            selectedValue={type}
            onValueChange={(v) => this.setState({ type: v })}
          >
            {TRANSACTION_TYPES.map((t) => (
              <Picker.Item key={t} label={TYPE_LABELS[t]} value={t} />
            ))}
          </Picker>
        </Item>
        {this.renderError('type')}
        <Item picker>
          <Label>Categoría</Label>
          <Picker
            mode="dropdown"
            selectedValue={category}
            onValueChange={(v) => this.setState({ category: v })}
          >
            {categories.map((c) => (
              <Picker.Item key={c} label={c} value={c} />
            ))}
          </Picker>
        </Item>
        {this.renderError('category')}
        <View style={{ padding: 8 }}>
          <Textarea
            rowSpan={3}
            bordered
            placeholder="Descripción"
            value={description}
            onChangeText={(t) => this.setState({ description: t })}
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

TransactionForm.propTypes = {
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  submitLabel: PropTypes.string,
};

TransactionForm.defaultProps = {
  initialValues: null,
  onCancel: null,
  submitLabel: 'Guardar',
};

export default TransactionForm;
