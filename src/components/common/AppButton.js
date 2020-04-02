import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text } from 'native-base';
import colors from '../../constants/colors';

const AppButton = ({ label, onPress, variant, disabled, block }) => (
  <Button
    onPress={onPress}
    disabled={disabled}
    block={block}
    style={{ backgroundColor: colors[variant] }}
  >
    <Text>{label}</Text>
  </Button>
);

AppButton.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['primary', 'success', 'danger', 'light']),
  disabled: PropTypes.bool,
  block: PropTypes.bool,
};

AppButton.defaultProps = {
  variant: 'primary',
  disabled: false,
  block: false,
};

export default AppButton;
