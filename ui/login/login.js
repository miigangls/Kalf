import React, { Component } from 'react';
import {AppState,  View, TouchableHighlight } from 'react-native';
import { Container, Content,
  Header, Left, Body, Right, Title,
  Button, Text, Thumbnail,
  Form, Item, Input, Label, Spinner } from 'native-base';

  import Styles from '../../styles';


export default class Login extends React.Component  {
  state = {formValid: false}
  render() {
    let {formValid} = this.state;
    return (
      <Container>
        <Content style={{display: 'flex', backgroundColor:'#15243E'}}>
          {this.props.loading ? <Spinner /> :
            <View>
              <Form style={{margin: 10}}>
                <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1}}>
                    <Text style={Styles.signIn.LogoText}>KALF</Text>
                </View>
                <Button style={Styles.signIn.btnLoginIngresar}>
                  <Text>INGRESAR</Text>
                </Button>

                <TouchableHighlight style={Styles.signIn.btnLoginRegistrar}>
                  <Text style={{color:"#FFF"}}>REGISTRAR</Text>
                </TouchableHighlight>
              </Form>

            </View>
          }
        </Content>
      </Container>
    )
  }
}
