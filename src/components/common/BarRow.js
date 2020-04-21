import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { Text } from 'native-base';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  label: {
    flex: 1,
    color: colors.dark,
    fontSize: 13,
  },
  barWrap: {
    width: '60%',
    height: 8,
    backgroundColor: colors.light,
    borderRadius: 4,
    overflow: 'hidden',
  },
  fill: {
    height: 8,
    borderRadius: 4,
  },
  right: {
    marginLeft: 8,
  },
});

const BarRow = ({ label, value, max, color, right }) => {
  const pct = max > 0 ? Math.max(0, Math.min(100, (value / max) * 100)) : 0;
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.barWrap}>
        <View
          style={[styles.fill, { width: `${pct}%`, backgroundColor: color }]}
        />
      </View>
      {right ? <View style={styles.right}>{right}</View> : null}
    </View>
  );
};

BarRow.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  color: PropTypes.string,
  right: PropTypes.node,
};

BarRow.defaultProps = {
  color: colors.primary,
  right: null,
};

export default BarRow;
