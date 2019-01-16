import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Styles from '../styles';

const Button = (props) => {
  const { text, onPress, disabled, highlight } = props;
  let extraStyle;
  if (disabled) extraStyle = Styles.button.disabled;
  else if (highlight) extraStyle = Styles.button.highlight;
  return (
    <TouchableOpacity style={[Styles.button.button, extraStyle]} onPress={() => {if (!disabled) onPress(); }}>
      <Text style={Styles.button.buttonText}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  text: React.PropTypes.string,
  onPress: React.PropTypes.func,
};

Button.defaultProps = {
  text: 'Button Text',
  onPress: () => console.log('Button Pressed'),
};

export default Button;
