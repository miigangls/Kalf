import React from 'react';
import { Item, Label, Picker } from 'native-base';
import banks  from '../../server/banks.json'

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
    banks.forEach(({name, id}, i) =>{
      options.push(<Picker.Item key={i+name+id} value={id} label={name} />)
    })
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
