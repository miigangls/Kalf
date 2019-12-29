import React from 'react';
import { Item, Label, Picker } from 'native-base';

export default class AppPicker extends React.Component {
  state = { value: '' }
  render() {
    let { value } = this.state
    , {error, success, label} = this.props
    , options = [<Picker.Item value='EMPTY' label="EMPTY" />]
    return (
      <Picker
            note
            mode="dropdown"
            style={this.props.style}
            selectedValue={value}
            onValueChange={this.setValue}>
             {options}
          </Picker>
    );
  }
  setValue = (value) => {
    let valid = value
    , error = !valid, success = !!valid;
    this.setState({value, error, success})
    this.props.getInput(value, valid)
  }
}
