import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ScrollView, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Text } from 'native-base';
import colors from '../../constants/colors';
import { switchMonth } from '../../store/modules/app/appActions';

const MONTHS = [
  { key: '2020-01', label: 'Ene' },
  { key: '2020-02', label: 'Feb' },
  { key: '2020-03', label: 'Mar' },
  { key: '2020-04', label: 'Abr' },
  { key: '2020-05', label: 'May' },
];

const styles = StyleSheet.create({
  bar: { backgroundColor: colors.white, borderBottomWidth: 1, borderBottomColor: colors.light },
  pill: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginHorizontal: 4,
    marginVertical: 6,
    borderRadius: 16,
    backgroundColor: colors.light,
  },
  pillActive: { backgroundColor: colors.primary },
  text: { fontSize: 13, color: colors.dark },
  textActive: { color: colors.white, fontWeight: 'bold' },
});

const MonthSwitcher = ({ currentMonth, onSwitch }) => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.bar} contentContainerStyle={{ paddingHorizontal: 8 }}>
    {MONTHS.map((m) => {
      const active = currentMonth === m.key;
      return (
        <TouchableOpacity key={m.key} style={[styles.pill, active && styles.pillActive]} onPress={() => onSwitch(m.key)}>
          <Text style={[styles.text, active && styles.textActive]}>{m.label}</Text>
        </TouchableOpacity>
      );
    })}
    <View style={{ width: 8 }} />
  </ScrollView>
);

MonthSwitcher.propTypes = {
  currentMonth: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
};

export default connect(
  (state) => ({ currentMonth: state.app.currentMonth }),
  { onSwitch: switchMonth }
)(MonthSwitcher);
