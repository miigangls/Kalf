import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { Text } from 'native-base';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
  },
  title: {
    fontWeight: 'bold',
    color: colors.dark,
    fontSize: 16,
  },
  right: {
    marginLeft: 'auto',
  },
});

const SectionTitle = ({ title, right }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    {right ? <View style={styles.right}>{right}</View> : null}
  </View>
);

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  right: PropTypes.node,
};

SectionTitle.defaultProps = {
  right: null,
};

export default SectionTitle;
