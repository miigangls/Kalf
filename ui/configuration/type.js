import React from 'react';
import {Alert, View, TouchableHighlight } from 'react-native';
import { Container, Content,  Title, Button, Text,Icon, Card} from 'native-base';
import { connect } from 'react-redux'
import Styles from '../../styles';

import {route} from '../../actions/route'

import Footer from '../reusables/footer'
import Header  from '../reusables/header'

import InputNumeric from '../components/numeric';
import Textarea from '../components/textarea';
import Picker  from '../reusables/pickerExpenses'
import { addAndUpdate, deleteExpenses } from '../../actions/expense'
//FF9AA2
class ConfigurationType extends React.Component {
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
      <Container>
       <Header title="CONFIGURACIÓN"/>
       <Content style={{display: 'flex',backgroundColor:'#1a2d4d', paddingLeft: 20, paddingRight: 20}}>
        <View style={{flex: 1, flexDirection: 'row',  marginTop: 10}}>
            <TouchableHighlight onPress={() => this.props.onRouter('confi-credit-card')} style={{ borderRadius:8, height: 180, width: 180 , backgroundColor: '#15243e', borderColor: '#15243e', padding: 30 }} >
              <View style={ {display: 'flex',  alignItems: 'center',  justifyContent: 'center'}} >
              <Icon style={{color: 'white', fontSize: 60}} type="FontAwesome5" name='cc-mastercard'/>
              <Text style={{color: 'white',  paddingTop: 20 }}>Tarjeta</Text>
              <Text style={{color: 'white' }}>Creadito</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.onRouter('expense-loans')}  style={{marginLeft: 10, borderRadius:8, height: 180 ,  width: 180 , backgroundColor: '#15243e', borderColor: '#15243e', padding: 30 }} >
              <View style={ {display: 'flex',  alignItems: 'center',  justifyContent: 'center'}} >
              <Icon style={{color: 'white', fontSize: 60}} type="FontAwesome5" name='money-check-alt'/>
              <Text style={{color: 'white',  paddingTop: 20  }}>Prestamos</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
            <TouchableHighlight  onPress={() => this.props.onRouter('expense-family')} style={{ borderRadius:8, height: 180, width: 180 ,  backgroundColor: '#15243e', borderColor: '#15243e', padding: 30 }} >
              <View style={ {display: 'flex',  alignItems: 'center',  justifyContent: 'center'}} >
                <Icon style={{color: 'white', fontSize: 60}} type="FontAwesome5" name='user-friends'/>
                <Text style={{color: 'white',  paddingTop: 20  }}>Familia</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.onRouter('expensen-others')}  style={{marginLeft: 10, borderRadius:8, height:180 , width: 180 ,  backgroundColor: '#15243e', borderColor: '#15243e', padding: 30 }} >
              <View style={ {display: 'flex',  alignItems: 'center',  justifyContent: 'center'}} >
              <Icon style={{color: 'white', fontSize: 60}} type="FontAwesome5" name='align-justify'/>
              <Text style={{color: 'white',  paddingTop: 20  }}>Otros Gastos</Text>
              </View>
            </TouchableHighlight>
          </View>

      </Content>
      <Footer />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  let {form} = state.expenses
  return { form }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRouter:(value)=>{dispatch(route(value))}
 }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfigurationType)
