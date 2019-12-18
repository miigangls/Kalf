import React, { Component } from 'react';
import {AppState,  View, TouchableHighlight } from 'react-native';
import { Container, Content,
  Header, Left, Body, Right, Title,
  Button, Text, Thumbnail,
  Form, Item, Input, Label,Icon,   Spinner } from 'native-base';

import Footer from '../reusables/footer'

import Styles from '../../styles';

export default class Income extends React.Component  {
  state = {formValid: false}
  render() {
    let {formValid} = this.state;
    return (
      <Container>
        <Header style={Styles.main.header}>
          <Left/>
          <Body style={Styles.main.headerBody}>
            <Title >KALF</Title>
          </Body>
          <Right>
            <Button vertical>
              <Icon type="FontAwesome5" name="bars" />
            </Button>
          </Right>
        </Header>
        <Content style={{display: 'flex'}}>
          {this.props.loading ? <Spinner /> :
            <View>
            </View>
          }
        </Content>
        <Footer />
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
