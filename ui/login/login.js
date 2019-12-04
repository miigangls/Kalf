import React, { Component } from 'react';
import {AppState,  View, TouchableHighlight } from 'react-native';
import { Container, Content,
  Header, Left, Body, Right, Title,
  Button, Text, Thumbnail,
  Form, Item, Input, Label, Spinner } from 'native-base';

import Styles from '../../styles';
import Email from '../components/email';
import Password from '../components/password';

export default class Login extends React.Component  {
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
                    <Text style={Styles.signIn.LogoText}>KALF</Text>
                </View>

                <Email style={Styles.signIn.Input} placeholder="Email" getInput={(value, valid) => this.getField('email', value, valid)}/>
                <Password style={Styles.signIn.Input} placeholder="Password" getInput={(value, valid) => this.getField('password', value, valid)} />

                <Button style={Styles.signIn.btnLoginIngresar}>
                  <Text>INGRESAR</Text>
                </Button>

                <TouchableHighlight style={Styles.signIn.btnLoginRegistrar}>
                  <Text style={{color:"#FFF"}}>Registrar</Text>
                </TouchableHighlight>
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
