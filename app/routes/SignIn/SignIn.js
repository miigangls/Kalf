import React, {Component} from 'react';
import Meteor from 'react-native-meteor';
import { Text, View, Image, KeyboardAvoidingView } from 'react-native';
import Button from '../../components/Button';
import GenericTextInput, { InputWrapper } from '../../components/GenericTextInput';
import Styles from '../../styles';
import Logo from '../../images/rose.png';
import {T9n} from '../../config.js'

import Actions from '../../actions/index.js'

//redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { connect } from 'react-redux'

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: ''};
  }

  render() {
    const text = T9n.loggedOut.signIn;
    return (
      <KeyboardAvoidingView style={Styles.centeredContainer} behavior='padding'>
        <View style={Styles.signIn.header}>
          <Image resizeMode='contain' style={Styles.signIn.logo} source={Logo}/>
          <Text style={Styles.signIn.headerText}>{text.title}</Text>
        </View>

        <InputWrapper>
          <GenericTextInput placeholder={text.enterEmail} onChangeText={(email) => this.setState({ email })} />
          <GenericTextInput password={true} placeholder={text.enterPassword} onChangeText={(password) => this.setState({ password })}
            secureTextEntry borderTop />
        </InputWrapper>

        <View style={Styles.signIn.error}>
          <Text style={Styles.signIn.errorText}>{text[this.props.error]}</Text>
        </View>

        <View style={Styles.signIn.buttons}>
          <Button text={text.signIn} onPress={() => { this.props.handleSignIn(this.state) }} />
        </View>
      </KeyboardAvoidingView>
    );
  }
};

const mapStateToProps = (state) => {
  return { signIn: state.signIn, error: state['signIn.error'] }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSignIn(state) {
      dispatch(Actions.signIn(state))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn)
