import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { Card, CardItem } from 'native-base';

const AppCard = ({ children, style, onPress }) => {
  const content = (
    <Card style={style}>
      <CardItem>{children}</CardItem>
    </Card>
  );
  if (onPress) {
    return <TouchableOpacity onPress={onPress}>{content}</TouchableOpacity>;
  }
  return content;
};

AppCard.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  onPress: PropTypes.func,
};

AppCard.defaultProps = {
  style: null,
  onPress: null,
};

export default AppCard;
