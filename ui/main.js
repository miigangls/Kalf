import React, { Component } from 'react';
import {AppState,  View } from 'react-native';
import { Container, Content, Left, Body, Right, Title, Button, Text, Spinner, Icon } from 'native-base';

import Styles from '../styles'
import Login from './login'
import Register from './register'
import Income from './income'
import Expenses from './expenses'
import CreditCards from './configuration/TCards/'
import Type from './configuration/type'
import Footer from './reusables/footer'
import Header from './reusables/header'

export default class Main extends React.Component  {
  state = {loading: true}
  constructor(props) {
    super()
    AppState.addEventListener('change', this._handleAppStateChange);
    this.router = { //speed switch
      'register' : Register,
      'income': Income,
      'expenses': Expenses,
      
      'confi': Type,
      'confi-credit-card': CreditCards,
      'confi-credit-card-form': CreditCards,

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
        <Header  title="BALANCE GENERAL"/>
        <Content style={{display: 'flex',backgroundColor:'#1a2d4d', paddingLeft: 20, paddingRight: 20}}>
        </Content>
        <Footer />
      </Container>
    );
  }
}
