import React, { Component } from 'react';
import {AppState,  View, TouchableHighlight, Alert } from 'react-native';
import { Container, Content, Left, Body, Right, Title, Button, Text,Icon, Card, CardItem } from 'native-base';

import Styles from '../../styles';
import Footer from '../reusables/footer'
import Header from '../reusables/header'

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
      <Header title="GASTOS" />
      <Content style={{display: 'flex',backgroundColor:'#1a2d4d', paddingLeft: 20, paddingRight: 20}}>
        <Card style={{ borderRadius:8, height: 230 , backgroundColor: '#FFF', borderColor: '#FFF', padding: 30, marginTop: 15 }}>
          <View style={{width: '100%', flex: 1,  flexDirection: 'row', paddingTop: 0, height: 30}} >
            <Icon style={{color: '#203860', textAlign: 'left', fontSize:40, width: 100}} type="FontAwesome5" name="money-check-alt" />
            <Text style={{color: '#203860', textAlign: 'right', fontSize: 18, paddingTop: 10}}>
              TOTAL DE GASTOS
            </Text>
          </View>
          <Text style={{color: '#203860', textAlign: 'center', fontSize: 30, paddingTop: 20}}>
          {this.props.total}
          </Text>
          <View style={{width: '100%', flex: 1,  flexDirection: 'row', paddingTop: 20}} >
            <Text style={{color: '#203860', textAlign: 'left', fontSize:15,  width: 180}}>
              ULTIMO GASTO
            </Text>
            <Text style={{color: '#203860', textAlign: 'right', fontSize:15, width: 100}}>
              22 Dic. 2019
            </Text>
          </View>
        </Card>
        <Text style={{color: '#FFF', textAlign: 'center', fontSize: 20, paddingTop: 10}}>
          LISTA DE GASTOS
        </Text>
        {this.props.expensesByUser.map(({name, note,icon, value, _id}, i)=>{
            return <TouchableHighlight  key={_id} onPress={() => this.updateData(_id, name, note,icon, value)}>
              <CardItem  key={i} style={{height: 60, borderRadius:5, marginTop:10, backgroundColor: '#15243e', borderColor: '#15243e' }} >
                <Left>
                    <Icon style={{color: '#15243e', fontSize:18, backgroundColor: '#fff', height: 40, width: 40, borderRadius:50, padding: 10}} type="FontAwesome5" name={icon} />
                    <Body>
                      <View>
                        <Text style={{color: '#f3f3f3'}}>{name}</Text>
                        <Text style={{color: '#f3f3f3', fontSize:10}}>{note}</Text>
                      </View>
                    </Body>
                  </Left>
                  <Right>
                    <View>
                      <Text style={{color: '#f3f3f3'}}>{`-${value}`}</Text>
                    </View>
                  </Right>
              </CardItem>
            </TouchableHighlight>
          })
        }
      </Content>
       <Button style={{paddingLeft: 5 ,width: 60,height: 60,borderRadius: 30,backgroundColor:'#2d4e86',position: 'absolute',bottom: 70,right: 20}}  onPress={() => {this.props.setModalVisible(this.props.modal, false)}}>
         <Icon type="FontAwesome5" name="plus" />
       </Button>
       <Footer />
      </Container>
    )
  }
}
