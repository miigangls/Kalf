import React, { Component } from 'react';
import {AppState,  View, TouchableHighlight, Modal, Alert } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Title, Button, Text,Icon, Card, CardItem, Footer } from 'native-base';

import Styles from '../../../styles';
import Menu from '../../reusables/footer'

export default class Expenses extends React.Component  {
  state = { };
  componentDidMount(){
    this.props.loadData()
  }
 updateData(_id, name, note,icon, value) {
   this.setState({_id, name, note,icon, value})
   this.props.setModalVisible(this.props.modal, true)
 }
 render() {
   let {expensesByUser:[]} = this.props
    return (
      <Container>
      <Header style={Styles.main.header}>
        <Left/>
        <Body style={Styles.main.headerBody}>
          <Title style={{color: '#FFF', marginLeft: 10}}>T. DE CREDITO</Title>
        </Body>
        <Right>
          <Button vertical>
            <Icon type="FontAwesome5" name="bars" />
          </Button>
        </Right>
      </Header>
      <Content style={{display: 'flex',backgroundColor:'#1a2d4d', paddingLeft: 20, paddingRight: 20}}>
        <Card style={{ borderRadius:8, height: 210 , backgroundColor: '#FFF', borderColor: '#FFF', padding: 30, marginTop: 15 }}>
          <View style={{width: '100%', flex: 1,  flexDirection: 'row', paddingTop: 0}} >
            <Icon style={{color: '#203860', textAlign: 'left', fontSize:40, width: 100}} type="FontAwesome5" name="cc-visa" />
            <Text style={{color: '#203860', textAlign: 'right', fontSize: 18, paddingTop: 10}}>
              BANCO CAJA SOCIAL
            </Text>
          </View>
          <Text style={{color: '#203860', textAlign: 'center', fontSize: 30, paddingTop: 20}}>
            5270 7777 8888 9999
          </Text>

          <View style={{width: '100%', flex: 1,  flexDirection: 'row', paddingTop: 20}} >
            <Text style={{color: '#203860', textAlign: 'left', fontSize:15,  width: 250}}>
              MIGUEL A. MENDOZA C.
            </Text>
            <Text style={{color: '#203860', textAlign: 'right', fontSize:10, width: 40}}>
              22/2019
            </Text>
          </View>
        </Card>
      </Content>
       <Button style={{paddingLeft: 5 ,width: 60,height: 60,borderRadius: 30,backgroundColor:'#2d4e86',position: 'absolute',bottom: 70,right: 20}}  onPress={() => {this.props.onRoute('confi-credit-card-form')}}>
         <Icon type="FontAwesome5" name="plus" />
       </Button>
       <Menu />
      </Container>
    )
  }
}
