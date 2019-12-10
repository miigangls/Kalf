import React, { Component } from 'react';
import KeepAwake from 'expo-keep-awake';
import {AppState,  View } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Title, Button, Text, Spinner, Icon } from 'native-base';
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
        <KeepAwake />
        <Header>
          <Left/>
          <Body>
            <Title>KALF</Title>
          </Body>
        </Header>
        <Content contentContainerStyle={{display: 'flex', flex: 1}}>
        </Content>
      </Container>
    );
  }
}
