import React from 'react';
import {Alert } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Title, Button, Text,Icon, Card} from 'native-base';
import { connect } from 'react-redux'
import Styles from '../../styles';

import {route} from '../../actions/route'

import Footer from '../reusables/footer'

import InputNumeric from '../components/numeric';
import Textarea from '../components/textarea';
import Picker  from '../reusables/pickerIncome'
import { addAndUpdate, deleteIncome } from '../../actions/income'
//FF9AA2
class FormIncome extends React.Component {
  constructor(props) {
    super()
    this.state = {
      _id: ((props.data || {})._id || '').toString(),
      income:((props.data || {}).name || '').toString(),
      valor: ((props.data || {}).value || ''),
      notas: ((props.data || {}).note || '').toString(),
      formValid: false
    }
  }
  render() {
    let {formValid} = this.state
    return (
      <Content style={{display: 'flex',backgroundColor:'#1a2d4d', paddingLeft: 20, paddingRight: 20}}>
        <Card style={{ borderRadius:8, height: (this.props.form) ? 420 : 370 , backgroundColor: '#15243e', borderColor: '#15243e', padding: 20 }}>
          <Picker style={{...Styles.register.Input, height: 50}} defaultValue={this.props.data.name} getInput={(value, valid) => this.getField('income', value, valid)} />
          <InputNumeric style={{...Styles.register.Input, height: 50}} defaultValue={this.props.data.value} placeholder="Valor" getInput={(value, valid) => this.getField('valor',  value, valid)}/>
          <Textarea style={{...Styles.register.Input, height: 100, paddingTop:10}} defaultValue={this.props.data.note} placeholder="Notas" getInput={(value, valid) => this.getField('notas', value, valid)}/>

          <Button light style={{height: 50,textAlign: 'center', width: 280, marginTop: 5}} onPress={() => this.props.onPress(this.state)}>
            <Text style={{ color: '#15243e', textAlign: 'center', width: 280}}>{(this.props.form) ? `ACTUALIZAR` : `AGREGAR` }  </Text>
          </Button>

          {(this.props.form) ?
            <Button light style={{height: 50,textAlign: 'center', width: 280, marginTop: 5,  backgroundColor: '#f8d7da'}} onPress={() => this.props.onPressDelete(this.props.data._id)}>
              <Text style={{ color: '#15243e', textAlign: 'center', width: 280}}> ELIMINAR </Text>
            </Button>: null
          }
        </Card>
      </Content>
    );
  }
  getField(field, value, valid) {
    this.setState({[field]: value, [field+"Valid"]: valid}, () => {
      let {income, valor, notas} = this.state;
      this.setState({formValid: income && valor && notas})
    })
  }
}

const mapStateToProps = (state) => {
  let {form} = state.income
  return { form }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPress:(state)=> dispatch(addAndUpdate(state)),
    onPressDelete: (value)=> dispatch(deleteIncome(value))
 }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormIncome)
