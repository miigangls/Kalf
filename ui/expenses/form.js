import React from 'react';
import { Container, Content, Header, Left, Body, Right, Title, Button, Text,Icon, Card} from 'native-base';
import { connect } from 'react-redux'
import Styles from '../../styles';

import {route} from '../../actions/route'

import Footer from '../reusables/footer'

import Input from '../components/input';


class Formexpenses extends React.Component {
  state = {formValid: false}
  render() {
    let {formValid} = this.state;
    return (
      <Content style={{display: 'flex',backgroundColor:'#1a2d4d', paddingLeft: 20, paddingRight: 20}}>
        <Card style={{ borderRadius:8, height: 150 , backgroundColor: '#15243e', borderColor: '#15243e', padding: 20 }}>
          <Input style={Styles.register.Input} placeholder="Valor" getInput={(value, valid) => this.getField('valor', value, valid)}/>
          <Input style={Styles.register.Input} placeholder="Notas" getInput={(value, valid) => this.getField('notas', value, valid)}/>
        </Card>
      </Content>
    );
  }
  getField(field, value, valid) {
    this.setState({[field]: value, [field+"Valid"]: valid}, () => {
      let {emailValid, passwordValid} = this.state;
      this.setState({formValid: emailValid && passwordValid})
    })
  }
}

const mapStateToProps = (state) => {
  return {  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goBack:() => dispatch(route('expenses'))
 }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Formexpenses)
