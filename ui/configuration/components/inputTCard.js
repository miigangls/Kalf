import React from 'react';
import { Item, Label, Input } from 'native-base';
const re = /^[0-9]{15,16}|(([0-9]{4}\s){3}[0-9]{3,4})$/;

export default class AppInput extends React.Component {
  constructor(props) {
    super()
    this.state = {
      value: (props.defaultValue || '').toString()
    }
  }
  render() {
    let { value } = this.state, {error, success} = this.props;
    return (
        <Input
          style={this.props.style}
          onChangeText={this.setValue}
          value={value}
          autoCapitalize='none'
          keyboardType = 'numeric'
          placeholder={this.props.placeholder}
          placeholderTextColor={'rgba(255, 255, 255, 0.9)'}
          underLineColorAndroid='transparent'
        />
    );
  }
  setValue = (value) => {
    let valid = value && re.test(value)
    , error = !valid, success = !!valid;
    this.setState({value, error, success})
    this.props.getInput(value, valid)
  }
}
