import React from 'react';
import { Item, Label, Input, Icon } from 'native-base';

const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default class Email extends React.Component {
  state = { value: '' }
  render() {
    let {value, error, success} = this.state;
    let icon = success ? <Icon name='checkmark-circle' /> : null
    if (!icon) icon = error ? <Icon name='close-circle' /> : null

    return (
        <Input
          style={this.props.style}
          keyboardType='email-address'
          textContentType="emailAddress"
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
