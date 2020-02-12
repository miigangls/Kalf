import React from 'react';
import { Item, Label, DatePicker } from 'native-base';

const TYPES  = [`Diners Club`, `American Express`, `Visa`, `Mastercard`]

export default class AppPicker extends React.Component {
  constructor(props) {
    super()
    this.state = {
      value: (props.defaultValue || '').toString()
    }
  }
  render() {
    let { value } = this.state
    , {minimumDate, maximumDate, locale, timeZoneOffsetInMinutes
      , modalTransparent, animationType, disabled, androidMode
      , placeHolderText, textStyle, placeHolderTextStyle} = this.props

    return (
      <DatePicker
          defaultDate={value}
          minimumDate={minimumDate}
          maximumDate={maximumDate}
          locale={locale}
          timeZoneOffsetInMinutes={timeZoneOffsetInMinutes}
          modalTransparent={modalTransparent}
          animationType={animationType}
          androidMode={androidMode}
          placeHolderText={placeHolderText}
          textStyle={textStyle}
          placeHolderTextStyle={placeHolderTextStyle}
          onDateChange={this.setValue}
          disabled={disabled}
          style={this.props.style}
      />
    );
  }
  setValue = (value) => {
    let valid = value
    , error = !valid, success = !!valid;
    this.setState({value, error, success})
    this.props.getInput(value, valid)
  }
}
