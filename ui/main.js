import React, { Component } from 'react';
import {AppState,  View } from 'react-native';
import { Container, Content, Footer, FooterTab, Header, Left, Body, Right, Title, Button, Text, Spinner, Icon } from 'native-base';

import Styles from '../styles'
import Login from './login'
import Register from './register'

export default class Main extends React.Component  {
  state = {loading: true}
  constructor(props) {
    super()
    AppState.addEventListener('change', this._handleAppStateChange);
    this.router = { //speed switch
      'register' : Register
    }
    props.appStartUp(() => this.setState({loading: false}))
  }
  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }
  _handleAppStateChange = (nextAppState) => {
   if (nextAppState == 'background') this.props.appShutDown()
   else if (nextAppState == 'active') this.props.appRestart()
 }
  render() {
   if (!this.props.user.name && !this.props.router) return <Login />
   return this.getRoute()
  }
  getRoute() {

    if (this.router[this.props.router]) {
      const TagName = this.router[this.props.router];
      return <TagName />
    }
    return this.getHome()
  }
  getHome() {
    return (
      <Container>
        <Header style={Styles.main.header}>
          <Left/>
          <Body style={Styles.main.headerBody}>
            <Title>KALF</Title>
          </Body>
          <Right>
            <Button vertical>
              <Icon type="FontAwesome5" name="bars" />
            </Button>
          </Right>
        </Header>
        <Content contentContainerStyle={{display: 'flex', flex: 1}}>
        </Content>
        <Footer >
          <FooterTab style={Styles.main.footer}>
           <Button vertical>
             <Icon type="FontAwesome5" name="money-check-alt" />
             <Text>Gatos</Text>
           </Button>
           <Button vertical>
             <Icon type="FontAwesome5" name="home" />
             <Text>Inicio</Text>
           </Button>
           <Button vertical>
             <Icon type="FontAwesome5" name="money-check" />
             <Text>Ingresos</Text>
           </Button>
         </FooterTab>
       </Footer>
      </Container>
    );
  }
}
