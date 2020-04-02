import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { Icon, Text } from 'native-base';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  icon: {
    fontSize: 48,
    color: colors.light,
    marginBottom: 8,
  },
  message: {
    color: '#888',
    fontSize: 14,
  },
});

const EmptyState = ({ message, icon }) => (
  <View style={styles.container}>
    <Icon name={icon} style={styles.icon} />
    <Text style={styles.message}>{message}</Text>
  </View>
);

EmptyState.propTypes = {
  message: PropTypes.string,
  icon: PropTypes.string,
};

EmptyState.defaultProps = {
  message: 'No hay datos',
  icon: 'information-circle',
};

export default EmptyState;
