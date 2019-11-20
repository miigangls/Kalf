import React, { Component } from 'react';
import {AppState,  View, Text } from 'react-native';
import { Container, Content } from 'native-base';


export default class Main extends React.Component  {

  state = {loading: true}
  constructor(props) {
    super()
    AppState.addEventListener('change', this._handleAppStateChange);
  }
  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }
  _handleAppStateChange = (nextAppState) => {
    /*if (nextAppState == 'background')
    else if (nextAppState == 'active') */
  }
  render() {
    return (
      <Container>
        <Content>
          <Text>Hola Mundo</Text>
        </Content>
      </Container>
    )
  }
}
