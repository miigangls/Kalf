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
          <Text style={{color: '#FFF', textAlign: 'center'}}>KALF</Text>
        </Body>
        <Right>
          <Button vertical>
            <Icon type="FontAwesome5" name="bars" />
          </Button>
        </Right>
      </Header>
      <Content style={{display: 'flex',backgroundColor:'#1a2d4d', paddingLeft: 20, paddingRight: 20}}>
      <Card style={{ borderRadius:8, height: 150 , backgroundColor: '#203860', borderColor: '#203860', paddingTop: 20 }}>
        <Text style={{color: '#FFF', textAlign: 'center', fontSize: 20,}}>
        TOTAL DE GASTOS
        </Text>
        <Text style={{color: '#FFF', textAlign: 'center', fontSize: 35, paddingTop: 10}}>
          {this.props.total}
        </Text>
        <Text style={{color: '#FFF', textAlign: 'center', fontSize:10, paddingTop: 10}}>
          22 Dec. 2019
        </Text>
      </Card>
      </Content>
       <Button style={{paddingLeft: 5 ,width: 60,height: 60,borderRadius: 30,backgroundColor:'#2d4e86',position: 'absolute',bottom: 70,right: 20}}  onPress={() => {this.props.setModalVisible(this.props.modal, false)}}>
         <Icon type="FontAwesome5" name="plus" />
       </Button>
       <Menu />
      </Container>
    )
  }
}
