import React from 'react';
import {Alert } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Title, Button, Text,Icon, Card} from 'native-base';
import { connect } from 'react-redux'
import Styles from '../../styles';

import {route} from '../../actions/route'

import Footer from '../reusables/footer'

import InputNumeric from '../components/numeric';
import Textarea from '../components/textarea';
import Picker  from '../reusables/pickerExpenses'
import { addAndUpdate, deleteExpenses } from '../../actions/expense'
//FF9AA2
class Formexpenses extends React.Component {
  state = {formValid: false}
  render() {
    let {formValid} = this.state
    return (
      <Content style={{display: 'flex',backgroundColor:'#1a2d4d', paddingLeft: 20, paddingRight: 20}}>
        <Card style={{ borderRadius:8, height: (this.props.form) ? 420 : 370 , backgroundColor: '#15243e', borderColor: '#15243e', padding: 20 }}>
          <Picker style={{...Styles.register.Input, height: 50}} getInput={(value, valid) => this.getField('expenses', value, valid)} />
          <InputNumeric style={{...Styles.register.Input, height: 50}} placeholder="Valor" getInput={(value, valid) => this.getField('valor', value, valid)}/>
          <Textarea style={{...Styles.register.Input, height: 100, paddingTop:10}} placeholder="Notas" getInput={(value, valid) => this.getField('notas', value, valid)}/>

          <Button light style={{height: 50,textAlign: 'center', width: 280, marginTop: 5}} onPress={() => this.props.onPress(this.state)}>
            <Text style={{ color: '#15243e', textAlign: 'center', width: 280}}>{(this.props.form) ? `ACTUALIZAR` : `AGREGAR` }  </Text>
          </Button>

          {(this.props.form) ?
            <Button light style={{height: 50,textAlign: 'center', width: 280, marginTop: 5,  backgroundColor: '#f8d7da'}} onPress={() => this.props.onPressDelete(this.props._id)}>
              <Text style={{ color: '#15243e', textAlign: 'center', width: 280}}> ELIMINAR </Text>
            </Button>: null
          }
        </Card>
      </Content>
    );
  }
  getField(field, value, valid) {
    this.setState({[field]: value, [field+"Valid"]: valid}, () => {
      let {expenses, valor, notas} = this.state;
      this.setState({formValid: expenses && valor && notas})
    })
  }
}

const mapStateToProps = (state) => {
  let {form} = state.expenses
  return { form }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPress:(state)=> dispatch(addAndUpdate(state)),
    onPressDelete: (value)=> dispatch(deleteExpenses(value))
 }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Formexpenses)
