import React, { Component } from 'react';
import {AppState,  View, TouchableHighlight, Modal, Alert } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Title, Button, Text,Icon, Card, CardItem } from 'native-base';

import Styles from '../../styles';
import Footer from '../reusables/footer'
import ExpensesForm from './form'
export default class Expenses extends React.Component  {
  state = { modalVisible: false};
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
        <Modal
           animationType="slide"
           transparent={false}
           visible={this.props.modal}
           style={{height: 100}}
           onRequestClose={() => this.props.onRequestClose(this.props.modal)}>
           <Container>
           <Header style={Styles.main.header}>
             <Left>
               <TouchableHighlight  onPress={() => this.props.onRequestClose(this.props.modal)}>
                 <Icon style={{color: '#FFF'}} type="FontAwesome5" name="arrow-left" />
               </TouchableHighlight>
             </Left>
             <Body style={Styles.main.headerBody}>
               <Title>KALF</Title>
             </Body>
             <Right/>
           </Header>
             <ExpensesForm style={{marginTop: 22}} data={this.state}/>
           </Container>
         </Modal>
      </Content>
       <Button style={{paddingLeft: 5 ,width: 60,height: 60,borderRadius: 30,backgroundColor:'#2d4e86',position: 'absolute',bottom: 70,right: 20}}  onPress={() => {this.props.setModalVisible(this.props.modal, false)}}>
         <Icon type="FontAwesome5" name="plus" />
       </Button>
       <Footer />
      </Container>
    )
  }
}
