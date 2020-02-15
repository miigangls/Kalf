import React from 'react';
import { Item, Label, Picker } from 'native-base';
import {View }  from 'react-native'


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
    , {error, success, label} = this.props
    , options = [<Picker.Item key="0" value='select' label="--select--" />]
    TYPES.forEach(name =>{
      options.push(<Picker.Item key={name} value={name} label={name} />)
    })
    return (
      <View style={this.props.style}>
        <Picker
          note
          mode="dropdown"
          style={{color: '#FFF'}}
          selectedValue={value}
          onValueChange={this.setValue}>
          {options}
        </Picker>
      </View>
    );
  }
  setValue = (value) => {
    let valid = value
    , error = !valid, success = !!valid;
    this.setState({value, error, success})
    this.props.getInput(value, valid)
  }
}
