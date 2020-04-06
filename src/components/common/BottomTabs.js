import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Text, Icon } from 'native-base';
import colors from '../../constants/colors';
import { setActiveTab } from '../../store/modules/app/appActions';

const TABS = [
  { key: 'dashboard', label: 'Resumen', icon: 'home' },
  { key: 'incomes', label: 'Ingresos', icon: 'cash' },
  { key: 'payments', label: 'Pagos', icon: 'card' },
  { key: 'expenses', label: 'Gastos', icon: 'pricetag' },
  { key: 'transactions', label: 'Movs', icon: 'list' },
  { key: 'savings', label: 'Ahorros', icon: 'wallet' },
  { key: 'debts', label: 'Deudas', icon: 'alert' },
  { key: 'reports', label: 'Reportes', icon: 'stats' },
  { key: 'calendar', label: 'Calendario', icon: 'calendar' },
];

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: colors.light,
    backgroundColor: colors.white,
  },
  tab: { width: 78, paddingVertical: 8, alignItems: 'center', justifyContent: 'center' },
  label: { fontSize: 11, marginTop: 2 },
});

const BottomTabs = ({ activeTab, onChange }) => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.bar} contentContainerStyle={{ flexDirection: 'row' }}>
    {TABS.map((t) => {
      const active = activeTab === t.key;
      const tint = active ? colors.primary : colors.gray;
      return (
        <TouchableOpacity key={t.key} style={styles.tab} onPress={() => onChange(t.key)}>
          <Icon name={t.icon} style={{ color: tint, fontSize: 22 }} />
          <Text style={[styles.label, { color: tint }]}>{t.label}</Text>
        </TouchableOpacity>
      );
    })}
  </ScrollView>
);

BottomTabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ activeTab: state.app.activeTab });
const mapDispatchToProps = { onChange: setActiveTab };

export default connect(mapStateToProps, mapDispatchToProps)(BottomTabs);
