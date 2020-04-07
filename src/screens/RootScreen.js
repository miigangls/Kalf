import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import DashboardScreen from './DashboardScreen';
import IncomeScreen from './IncomeScreen';
import ScheduledPaymentsScreen from './ScheduledPaymentsScreen';
import MonthlyExpensesScreen from './MonthlyExpensesScreen';
import TransactionsScreen from './TransactionsScreen';
import SavingsScreen from './SavingsScreen';
import DebtsScreen from './DebtsScreen';
import ReportsScreen from './ReportsScreen';
import CalendarScreen from './CalendarScreen';
import BottomTabs from '../components/common/BottomTabs';

const styles = StyleSheet.create({
  root: { flex: 1 },
  body: { flex: 1 },
});

const RootScreen = ({ activeTab }) => {
  let Screen = DashboardScreen;
  if (activeTab === 'incomes') Screen = IncomeScreen;
  else if (activeTab === 'payments') Screen = ScheduledPaymentsScreen;
  else if (activeTab === 'expenses') Screen = MonthlyExpensesScreen;
  else if (activeTab === 'transactions') Screen = TransactionsScreen;
  else if (activeTab === 'savings') Screen = SavingsScreen;
  else if (activeTab === 'debts') Screen = DebtsScreen;
  else if (activeTab === 'reports') Screen = ReportsScreen;
  else if (activeTab === 'calendar') Screen = CalendarScreen;

  return (
    <View style={styles.root}>
      <View style={styles.body}>
        <Screen />
      </View>
      <BottomTabs />
    </View>
  );
};

RootScreen.propTypes = { activeTab: PropTypes.string.isRequired };

export default connect((state) => ({ activeTab: state.app.activeTab }))(RootScreen);
