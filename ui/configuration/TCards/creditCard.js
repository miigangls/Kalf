import React, { Component } from 'react';
import {AppState,  View, TouchableHighlight, Modal, Alert } from 'react-native';
import { Container, Content, Left, Body, Right, Title, Button, Text,Icon, Card, CardItem } from 'native-base';

import Styles from '../../../styles';
import Footer from '../../reusables/footer'
import Header from '../../reusables/header'
import banks  from '../../../server/banks.json'

export default class Expenses extends React.Component  {
  state = { };
  componentDidMount(){
    this.props.loadData()
  }
  updateData(_id, bank, type, number, cupo) {
    this.setState({_id, bank, type, number, cupo})
  console.log(this.state);
    this.props.updateData(this.state)
    this.props.onRoute('confi-credit-card-form')
  }
 render() {
   let {tCards:[]} = this.props
    return (
      <Container>
      <Header  title="T. CREDITO" />
      <Content style={{display: 'flex',backgroundColor:'#1a2d4d', paddingLeft: 20, paddingRight: 20}}>
        {
          this.props.tCards.map(({_id, bank, type, number, cupo})=>{
            bank = banks.find(memo => {return memo.id == parseInt(bank)})
            return <TouchableHighlight key={_id} onPress={() => this.updateData(_id, bank, type, number, cupo)} >
              <Card style={{ borderRadius:8, height: 210 , backgroundColor: '#FFF', borderColor: '#FFF', padding: 30, marginTop: 15 }}>
                <View style={{width: '100%', flex: 1,  flexDirection: 'row', paddingTop: 0}} >
                  <Icon style={{color: '#203860', textAlign: 'left', fontSize:40, width: 90}} type="FontAwesome5" name="cc-visa" />
                  <Text style={{color: '#203860', textAlign: 'right', fontSize: 18, paddingTop: 10, textTransform: 'uppercase'}}>
                  {bank.name}
                  </Text>
                </View>
                <Text style={{color: '#203860', textAlign: 'center', fontSize: 30, paddingTop:5}}>
                  {number}
                </Text>

                <View style={{width: '100%', flex: 1,  flexDirection: 'row', paddingTop: 20}} >
                  <Text style={{color: '#203860', textAlign: 'left', fontSize:15,  width: 250,  textTransform: 'uppercase'}}>
                    {this.props.name}
                  </Text>
                  <Text style={{color: '#203860', textAlign: 'right', fontSize:14, width: 70}}>
                    {cupo}
                  </Text>
                </View>
              </Card>
            </TouchableHighlight>
          })
        }


      </Content>
       <Button style={{paddingLeft: 5 ,width: 60,height: 60,borderRadius: 30,backgroundColor:'#2d4e86',position: 'absolute',bottom: 70,right: 20}}  onPress={() => {this.props.onRoute('confi-credit-card-form')}}>
         <Icon type="FontAwesome5" name="plus" />
       </Button>
       <Footer />
      </Container>
    )
  }
}
