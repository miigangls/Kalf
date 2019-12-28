import React, { Component } from 'react';
import {AppState,  View, TouchableHighlight } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Title, Button, Text,Icon, Card, CardItem, Fab } from 'native-base';

import Styles from '../../styles';
import Footer from '../reusables/footer'

export default class Expenses extends React.Component  {
  state = {  active: false };
 render() {
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
      <Content style={{display: 'flex',backgroundColor:'#1a2d4d', paddingLeft: 20, paddingRight: 20}}>

        <Card style={{ borderRadius:8, height: 150 , backgroundColor: '#F35A81', borderColor: '#F35A81', paddingTop: 20 }}>
          <Text style={{color: '#FFF', textAlign: 'center', fontSize: 20,}}>
          TOTAL DE GASTOS
          </Text>
          <Text style={{color: '#FFF', textAlign: 'center', fontSize: 35, paddingTop: 10}}>
            700.000
          </Text>
          <Text style={{color: '#FFF', textAlign: 'center', fontSize:10, paddingTop: 10}}>
            22 Dec. 2019
          </Text>
        </Card>
        <Text style={{color: '#FFF', textAlign: 'center', fontSize: 20, paddingTop: 10}}>
          LISTA DE GASTOS
        </Text>
        <CardItem  style={{height: 60, borderRadius:5, marginTop:10, backgroundColor: '#15243e', borderColor: '#15243e' }} onPress={() => alert("This is Card Header")}>
          <Left>
              <Icon style={{color: '#15243e', fontSize:18, backgroundColor: '#fff', height: 40, width: 40, borderRadius:50, padding: 10}} type="FontAwesome5" name="car" />
              <Body>
                <Text style={{color: '#f3f3f3'}}>Automovil</Text>
                <Text style={{color: '#f3f3f3', fontSize:10}}>22 Dec. 2019</Text>
              </Body>
            </Left>
            <Right>
              <Text style={{color: '#f3f3f3'}}>-$323.000</Text>
            </Right>
          </CardItem>

          <CardItem  style={{height: 60, borderRadius:5, marginTop:10, backgroundColor: '#15243e', borderColor: '#15243e' }} onPress={() => alert("This is Card Header")}>
            <Left>
              <Icon style={{color: '#15243e', fontSize:18, backgroundColor: '#fff', height: 40, width: 40, borderRadius:50, padding: 10}} type="FontAwesome5" name="home" />
              <Body>
                <Text style={{color: '#f3f3f3'}}>Alquiler</Text>
                <Text style={{color: '#f3f3f3', fontSize:10}}>22 Dec. 2019</Text>
              </Body>
            </Left>
            <Right>
                <Text style={{color: '#f3f3f3'}}>-$400.000</Text>
            </Right>
          </CardItem>

          <CardItem  style={{height: 60,borderRadius:5, marginTop:10, backgroundColor: '#15243e', borderColor: '#15243e' }} onPress={() => alert("This is Card Header")}>
          <Left>
            <Icon style={{color: '#15243e', fontSize:18, backgroundColor: '#fff', height: 40, width: 40, borderRadius:50, padding: 10}} type="FontAwesome5" name="car" />
            <Body>
              <Text style={{color: '#f3f3f3'}}>Combustible</Text>
              <Text style={{color: '#f3f3f3', fontSize:10}}>22 Dec. 2019</Text>
            </Body>
          </Left>
          <Right>
              <Text style={{color: '#f3f3f3'}}>-$80.000</Text>
          </Right>

          </CardItem>

          <CardItem  style={{height: 60,borderRadius:5, marginTop:10, backgroundColor: '#15243e', borderColor: '#15243e' }} onPress={() => alert("This is Card Header")}>
          <Left>
            <Icon style={{color: '#15243e', fontSize:18, backgroundColor: '#fff', height: 40, width: 40, borderRadius:50, padding: 10}} type="FontAwesome5" name="car" />
            <Body>
              <Text style={{color: '#f3f3f3'}}>Combustible</Text>
              <Text style={{color: '#f3f3f3', fontSize:10}}>22 Dec. 2019</Text>
            </Body>
          </Left>
          <Right>
              <Text style={{color: '#f3f3f3'}}>-$80.000</Text>
          </Right>

          </CardItem>
          <CardItem  style={{height: 60,borderRadius:5, marginTop:10, backgroundColor: '#15243e', borderColor: '#15243e' }} onPress={() => alert("This is Card Header")}>
          <Left>
            <Icon style={{color: '#15243e', fontSize:18, backgroundColor: '#fff', height: 40, width: 40, borderRadius:50, padding: 10}} type="FontAwesome5" name="car" />
            <Body>
              <Text style={{color: '#f3f3f3'}}>Combustible</Text>
              <Text style={{color: '#f3f3f3', fontSize:10}}>22 Dec. 2019</Text>
            </Body>
          </Left>
          <Right>
              <Text style={{color: '#f3f3f3'}}>-$80.000</Text>
          </Right>

          </CardItem>

      </Content>
       <Button style={{paddingLeft: 5 ,width: 60,height: 60,borderRadius: 30,backgroundColor:'#F35A81',position: 'absolute',bottom: 70,right: 20}}  onPress={() => alert("This is Card Header")}>
         <Icon type="FontAwesome5" name="plus" />
       </Button>
      <Footer />
      </Container>
    )
  }
}
