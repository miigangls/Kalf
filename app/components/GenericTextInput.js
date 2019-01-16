import React from 'react';
import { StyleSheet, View, TextInput, Dimensions } from 'react-native';
import { MKTextField } from 'react-native-material-kit';
import Styles from '../styles';

export const InputWrapper = (props) => {
  return (
    <View style={Styles.genericTextInput.inputWrapper}>
      {props.children}
    </View>
  );
};

export default GenericTextInput = (props) => {
  return (
    <View>
      {props.borderTop ? <View style={Styles.genericTextInput.divider} /> : null}
      <MKTextField
        style={Styles.genericTextInput.input}
        autoCapitalize="none"
        underlineEnabled={false}
        autoCorrect={false}
        underlineSize={0}
        {...props}
      />
    </View>
  );
};
