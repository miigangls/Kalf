import React from 'react';
import {Alert, View } from 'react-native';
import { Container, Content, Left, Body, Right, Title, Button, Text,Icon, Card} from 'native-base';

import { connect } from 'react-redux'
import Styles from '../../../styles';

import {route} from '../../../actions/route'
import { addAndUpdate, deleteTCards }from '../../../actions/tCards'


import Footer from '../../reusables/footer'
import Header from  '../../reusables/header'

import InputNumeric from '../../components/numeric';
import InputNumericCard from '../components/inputTCard'
import Textarea from '../../components/textarea';
import PickerBanks  from '../../reusables/pickerBanks';
import PickerTCards from '../components/typeCards'
import DatePicker from '../components/datePicker'

class FormCreditCards extends React.Component {
  constructor(props) {
    super()
    this.state = {
      _id: ((props.data || {})._id || '').toString(),
      bank: ((props.data || {}).bank || '').toString(),
      type:((props.data || {}).type || '').toString(),
      number: ((props.data || {}).number || ''),
      cupo: ((props.data || {}).cupo || '').toString(),
      formValid: false
    }
  }
  render() {
    let {formValid} = this.state
    return (
      <Container>
      <Header  title="T. CREDITO" />
      <Content style={{display: 'flex',backgroundColor:'#1a2d4d', paddingLeft: 20, paddingRight: 20}}>
        <Card style={{ borderRadius:8,  backgroundColor: '#15243e', borderColor: '#15243e', padding: 20, paddingBotton: 10}}>
          <PickerBanks style={{...Styles.register.Input, height: 50}} defaultValue={this.props.data.bank}   getInput={(value, valid) => this.getField('bank', value, valid)} />
          <PickerTCards style={{...Styles.register.Input, height: 50}} defaultValue={this.props.data.type}  getInput={(value, valid) => this.getField('type', value, valid)} />
          <InputNumericCard style={{...Styles.register.Input, height: 50}} defaultValue={this.props.data.number}  placeholder="Numero T. Credito " getInput={(value, valid) => this.getField('number',  value, valid)}/>
          <InputNumeric style={{...Styles.register.Input, height: 50}} defaultValue={this.props.data.cupo} placeholder="Cupo" getInput={(value, valid) => this.getField('cupo',  value, valid)}/>
          <Button light style={{height: 50,textAlign: 'center', width: 280, marginTop: 10, marginBotton: 10, marginLeft:22}} onPress={() => this.props.onPress(this.state)}>
            <Text style={{ color: '#15243e', textAlign: 'center', width: 280}}>{`ACEPTAR` }  </Text>
          </Button>
          {(this.props.data._id) ?
            <Button light style={{height: 50,textAlign: 'center', width: 280, marginTop: 5, marginLeft:22, backgroundColor: '#f8d7da'}} onPress={() => this.props.onPressDelete(this.props.data._id)}>
              <Text style={{ color: '#15243e', textAlign: 'center', width: 280}}> ELIMINAR </Text>
            </Button>: null
          }
        </Card>
      </Content>
      <Footer />
      </Container>
    );
  }
  getField(field, value, valid) {
    this.setState({[field]: value, [field+"Valid"]: valid}, () => {
      let { bank, type, number, cupo} = this.state;
      this.setState({formValid: bank && type && number && cupo})
    })
  }
}

const mapStateToProps = (state) => {
  let {form} = state.tCards
  console.log(form);
  return { data: form }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPress:(state)=> dispatch(addAndUpdate(state)),
    onPressDelete: (value)=> dispatch(deleteTCards(value))
 }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormCreditCards)
