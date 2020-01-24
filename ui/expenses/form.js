import React from 'react';
import {Alert, View, TouchableHighlight } from 'react-native';
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
  constructor(props) {
    super()
    this.state = {
      _id: ((props.data || {})._id || '').toString(),
      expenses:((props.data || {}).name || '').toString(),
      valor: ((props.data || {}).value || ''),
      notas: ((props.data || {}).note || '').toString(),
      formValid: false
    }
  }
  render() {
    let {formValid} = this.state
    return (
      <Content style={{display: 'flex',backgroundColor:'#1a2d4d', paddingLeft: 20, paddingRight: 20}}>
      <View style={{flex: 1, flexDirection: 'row',  marginTop: 10}}>
            <TouchableHighlight  style={{ borderRadius:8, height: 180, width: 180 , backgroundColor: '#15243e', borderColor: '#15243e', padding: 30 }} >
              <View style={ {display: 'flex',  alignItems: 'center',  justifyContent: 'center'}} >
              <Icon style={{color: 'white', fontSize: 60}} type="FontAwesome" name='upload'/>
              <Text style={{color: 'white',  paddingTop: 20 }}>Tarjeta</Text>
              <Text style={{color: 'white' }}>Creadito</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight  style={{marginLeft: 10, borderRadius:8, height: 180 ,  width: 180 , backgroundColor: '#15243e', borderColor: '#15243e', padding: 30 }} >
              <View style={ {display: 'flex',  alignItems: 'center',  justifyContent: 'center'}} >
              <Icon style={{color: 'white', fontSize: 60}} type="FontAwesome" name='upload'/>
              <Text style={{color: 'white',  paddingTop: 20  }}>Prestamos</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
            <TouchableHighlight  style={{ borderRadius:8, height: 180, width: 180 ,  backgroundColor: '#15243e', borderColor: '#15243e', padding: 30 }} >
              <View style={ {display: 'flex',  alignItems: 'center',  justifyContent: 'center'}} >
                <Icon style={{color: 'white', fontSize: 60}} type="FontAwesome" name='upload'/>
                <Text style={{color: 'white',  paddingTop: 20  }}>Familia</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight  style={{marginLeft: 10, borderRadius:8, height:180 , width: 180 ,  backgroundColor: '#15243e', borderColor: '#15243e', padding: 30 }} >
              <View style={ {display: 'flex',  alignItems: 'center',  justifyContent: 'center'}} >
              <Icon style={{color: 'white', fontSize: 60}} type="FontAwesome" name='upload'/>
              <Text style={{color: 'white',  paddingTop: 20  }}>Otros Gastos</Text>
              </View>
            </TouchableHighlight>
          </View>
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
