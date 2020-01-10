import React from 'react';
import { Item, Label, Textarea } from 'native-base';
const re = /^[+]?([.]\d+|\d+([.]\d+)?)$/;

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
        <Textarea
          style={this.props.style}
          onChangeText={this.setValue}
          value={value}
          autoCapitalize='none'
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
