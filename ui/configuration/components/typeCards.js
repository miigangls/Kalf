import React from 'react';
import { Item, Label, Picker } from 'native-base';
import {View }  from 'react-native'


const TYPES  = [{
  value: "cc-discover",
  name: "Diners Club"
},{
  value: "cc-amex",
  name: "American Express"
} , {
  value: "cc-visa",
  name: "Visa"
}, {
  value: "cc-mastercard",
  name: "Mastercard"
}]

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
    TYPES.forEach(({name, value}, i) =>{
      options.push(<Picker.Item key={value} value={value} label={name} />)
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
