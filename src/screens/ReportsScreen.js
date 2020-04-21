import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';
import AppHeader from '../components/common/AppHeader';
import AppCard from '../components/common/AppCard';
import SectionTitle from '../components/common/SectionTitle';
import EmptyState from '../components/common/EmptyState';
import MoneyText from '../components/common/MoneyText';
import BarRow from '../components/common/BarRow';
import colors from '../constants/colors';
import {
  calculateMonthlySummary,
  calculateCategoryTotals,
  calculateExpensePercentage,
} from '../services/financeCalculator';

const styles = StyleSheet.create({
  cardInner: { flexDirection: 'column', width: '100%' },
});

const sumKey = (arr, key) =>
  (arr || []).reduce((a, x) => a + (Number(x[key]) || 0), 0);

class ReportsScreen extends React.Component {
  render() {
    const { monthData, currentMonth } = this.props;
    const summary = calculateMonthlySummary(monthData);

    const transactions = monthData.transactions || [];
    const txExpenses = transactions
      .filter((t) => t.type === 'expense')
      .reduce((a, t) => a + (Number(t.total) || 0), 0);

    const totalGastos =
      summary.totalPayments + summary.totalExpenses + txExpenses;
    const maxIvE = Math.max(summary.totalRealIncomes, totalGastos, 1);

    const presupuestado =
      sumKey(monthData.payments, 'budgetAmount') +
      sumKey(monthData.expenses, 'budgetAmount') +
      sumKey(monthData.savings, 'budgetAmount') +
      sumKey(monthData.debts, 'monthlyBudget');
    const real =
      summary.totalPayments +
      summary.totalExpenses +
      summary.totalSavings +
      summary.totalDebtsPaid;
    const maxPvR = Math.max(presupuestado, real, 1);

    const catTotalsObj = calculateCategoryTotals(transactions);
    const catArray = Object.keys(catTotalsObj)
      .map((category) => ({ category, amount: catTotalsObj[category] }))
      .sort((a, b) => b.amount - a.amount);
    const catTotalSum = catArray.reduce((a, c) => a + c.amount, 0);
    const catMax = catArray.length > 0 ? catArray[0].amount : 1;

    const savings = monthData.savings || [];
    const debts = monthData.debts || [];

    return (
      <Container>
        <AppHeader title="Reportes" subtitle={currentMonth} />
        <Content>
          <SectionTitle title="Ingresos vs Gastos" />
          <AppCard>
            <View style={styles.cardInner}>
              <BarRow
                label="Ingresos reales"
                value={summary.totalRealIncomes}
                max={maxIvE}
                color={colors.success}
                right={<MoneyText amount={summary.totalRealIncomes} />}
              />
              <BarRow
                label="Gastos totales"
                value={totalGastos}
                max={maxIvE}
                color={colors.danger}
                right={<MoneyText amount={totalGastos} />}
              />
            </View>
          </AppCard>

          <SectionTitle title="Presupuesto vs Real" />
          <AppCard>
            <View style={styles.cardInner}>
              <BarRow
                label="Presupuestado"
                value={presupuestado}
                max={maxPvR}
                color={colors.warning}
                right={<MoneyText amount={presupuestado} />}
              />
              <BarRow
                label="Real"
                value={real}
                max={maxPvR}
                color={colors.primary}
                right={<MoneyText amount={real} />}
              />
            </View>
          </AppCard>

          <SectionTitle title="Gasto por categoría" />
          {transactions.length === 0 || catArray.length === 0 ? (
            <EmptyState message="Sin transacciones este mes" />
          ) : (
            <AppCard>
              <View style={styles.cardInner}>
                {catArray.map((c) => {
                  const pct = calculateExpensePercentage(c.amount, catTotalSum);
                  const label = `${c.category} · ${Math.round(pct)}%`;
                  return (
                    <BarRow
                      key={c.category}
                      label={label}
                      value={c.amount}
                      max={catMax}
                      color={colors.primary}
                      right={<MoneyText amount={c.amount} />}
                    />
                  );
                })}
              </View>
            </AppCard>
          )}

          <SectionTitle title="Resumen ahorros" />
          {savings.length === 0 ? (
            <EmptyState message="Sin ahorros registrados" />
          ) : (
            <AppCard>
              <View style={styles.cardInner}>
                {savings.map((s) => (
                  <BarRow
                    key={s.id}
                    label={s.name}
                    value={Number(s.realAmount) || 0}
                    max={Number(s.budgetAmount) || 0}
                    color={colors.success}
                    right={<MoneyText amount={Number(s.realAmount) || 0} />}
                  />
                ))}
              </View>
            </AppCard>
          )}

          <SectionTitle title="Resumen deudas" />
          {debts.length === 0 ? (
            <EmptyState message="Sin deudas registradas" />
          ) : (
            <AppCard>
              <View style={styles.cardInner}>
                {debts.map((d) => (
                  <BarRow
                    key={d.id}
                    label={d.name}
                    value={Number(d.realPayment) || 0}
                    max={Number(d.monthlyBudget) || 0}
                    color={colors.danger}
                    right={
                      <MoneyText amount={Number(d.pendingBalance) || 0} />
                    }
                  />
                ))}
              </View>
            </AppCard>
          )}
        </Content>
      </Container>
    );
  }
}

ReportsScreen.propTypes = {
  currentMonth: PropTypes.string.isRequired,
  monthData: PropTypes.shape({
    incomes: PropTypes.array,
    payments: PropTypes.array,
    expenses: PropTypes.array,
    savings: PropTypes.array,
    debts: PropTypes.array,
    transactions: PropTypes.array,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  currentMonth: state.app.currentMonth,
  monthData: {
    incomes: state.incomes.items,
    payments: state.payments.items,
    expenses: state.expenses.items,
    savings: state.savings.items,
    debts: state.debts.items,
    transactions: state.transactions.items,
  },
});

export default connect(mapStateToProps)(ReportsScreen);
