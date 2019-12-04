import React, { Component } from 'react';
import {AppState,  View, TouchableHighlight } from 'react-native';
import { Container, Content,
  Header, Left, Body, Right, Title,
  Button, Text, Thumbnail,
  Form, Item, Label, Spinner } from 'native-base';

import Styles from '../../styles';
import Email from '../components/email';
import Password from '../components/password';
import Input from '../components/input';

export default class Register extends React.Component  {
  state = {formValid: false}
  render() {
    let {formValid} = this.state;
    return (
      <Container>
        <Content style={{display: 'flex', backgroundColor:'#15243E'}}>
          {this.props.loading ? <Spinner /> :
            <View>
              <Form style={{margin: 10}}>
                <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1}}>
                    <Text style={Styles.register.LogoText}>KALF</Text>
                </View>
                <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1}}>
                    <Text style={Styles.register.TextTitle}>REGISTRO</Text>
                </View>
                <Input style={Styles.register.Input} placeholder="Name" getInput={(value, valid) => this.getField('name', value, valid)}/>
                <Input style={Styles.register.Input} placeholder="Apellidos" getInput={(value, valid) => this.getField('last_name', value, valid)}/>
                <Email style={Styles.register.Input} placeholder="Email" getInput={(value, valid) => this.getField('email', value, valid)}/>
                <Password style={Styles.register.Input} placeholder="Password" getInput={(value, valid) => this.getField('password', value, valid)} />

                <Button style={Styles.signIn.btnLoginIngresar}>
                  <Text>ACEPTAR</Text>
                </Button>

              </Form>
            </View>
          }
        </Content>
      </Container>
    )
  }
  getField(field, value, valid) {
    this.setState({[field]: value, [field+"Valid"]: valid}, () => {
      let {emailValid, passwordValid} = this.state;
      this.setState({formValid: emailValid && passwordValid})
    })
  }
}
