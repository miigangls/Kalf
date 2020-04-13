import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text } from 'native-base';
import AppCard from '../common/AppCard';
import AppButton from '../common/AppButton';
import MoneyText from '../common/MoneyText';
import EmptyState from '../common/EmptyState';
import { calculateBudgetDifference, calculateExpensePercentage } from '../../services/financeCalculator';
import { formatPercent } from '../../utils/formatters';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  card: { width: '100%' },
  row: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 4 },
  name: { fontWeight: 'bold', fontSize: 16, color: colors.dark },
  category: { color: '#888', fontSize: 12, marginBottom: 4 },
  budget: { color: '#888', fontSize: 14 },
  diffPositive: { color: colors.success, fontSize: 14 },
  diffNegative: { color: colors.danger, fontSize: 14 },
  percent: { color: '#555', fontSize: 12 },
  actions: { flexDirection: 'row', marginTop: 8 },
  actionWrap: { flex: 1, marginHorizontal: 4 },
  cardInner: { flex: 1 },
});

const renderItem = (item, totalReal, onEdit, onDelete) => {
  const diff = calculateBudgetDifference(item.budgetAmount, item.realAmount);
  const pct = calculateExpensePercentage(item.realAmount, totalReal);
  return (
    <AppCard style={styles.card}>
      <View style={styles.cardInner}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.category}>{item.category}</Text>

        <View style={styles.row}>
          <Text>Real:</Text>
          <MoneyText amount={Number(item.realAmount) || 0} negative />
        </View>
        <View style={styles.row}>
          <Text style={styles.budget}>Presupuesto:</Text>
          <MoneyText amount={Number(item.budgetAmount) || 0} style={styles.budget} />
        </View>
        <View style={styles.row}>
          <Text>Diferencia:</Text>
          <Text style={diff < 0 ? styles.diffNegative : styles.diffPositive}>
            {diff.toFixed(2)}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.percent}>% del total real:</Text>
          <Text style={styles.percent}>{formatPercent(pct)}</Text>
        </View>

        {(onEdit || onDelete) ? (
          <View style={styles.actions}>
            {onEdit ? (
              <View style={styles.actionWrap}>
                <AppButton label="Editar" onPress={() => onEdit(item)} variant="primary" block />
              </View>
            ) : null}
            {onDelete ? (
              <View style={styles.actionWrap}>
                <AppButton label="Eliminar" onPress={() => onDelete(item)} variant="danger" block />
              </View>
            ) : null}
          </View>
        ) : null}
      </View>
    </AppCard>
  );
};

const ExpenseList = ({ items, totalReal, onEdit, onDelete }) => {
  if (!items || items.length === 0) {
    return <EmptyState message="Sin gastos presupuestados" icon="cash" />;
  }
  return (
    <FlatList
      data={items}
      keyExtractor={(it) => String(it.id)}
      renderItem={({ item }) => renderItem(item, totalReal, onEdit, onDelete)}
      contentContainerStyle={{ padding: 8 }}
    />
  );
};

ExpenseList.propTypes = {
  items: PropTypes.array.isRequired,
  totalReal: PropTypes.number,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

ExpenseList.defaultProps = {
  totalReal: 0,
  onEdit: null,
  onDelete: null,
};

export default ExpenseList;
