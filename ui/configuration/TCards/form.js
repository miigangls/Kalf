import React from 'react';
import {Alert, View } from 'react-native';
import { Container, Content, Left, Body, Right, Title, Button, Text,Icon, Card} from 'native-base';

import { connect } from 'react-redux'
import Styles from '../../../styles';

import {route} from '../../../actions/route'
import { addAndUpdate, deleteIncome }from '../../../actions/tCards'


import Footer from '../../reusables/footer'
import Header from  '../../reusables/header'

import InputNumeric from '../../components/numeric';
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
          <PickerBanks style={{...Styles.register.Input, height: 50}}  getInput={(value, valid) => this.getField('banks', value, valid)} />
          <PickerTCards style={{...Styles.register.Input, height: 50}}  getInput={(value, valid) => this.getField('type', value, valid)} />
          <InputNumeric style={{...Styles.register.Input, height: 50}} placeholder="Numero T. Credito " getInput={(value, valid) => this.getField('number',  value, valid)}/>
          <InputNumeric style={{...Styles.register.Input, height: 50}} placeholder="Cupo" getInput={(value, valid) => this.getField('cupo',  value, valid)}/>
          <Button light style={{height: 50,textAlign: 'center', width: 280, marginTop: 10, marginBotton: 10, marginLeft:22}} onPress={() => this.props.onPress(this.state)}>
            <Text style={{ color: '#15243e', textAlign: 'center', width: 280}}>{`AGREGAR` }  </Text>
          </Button>
        </Card>
      </Content>
      <Footer />
      </Container>
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
)(FormCreditCards)
