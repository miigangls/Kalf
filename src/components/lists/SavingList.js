import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text } from 'native-base';
import AppCard from '../common/AppCard';
import AppButton from '../common/AppButton';
import MoneyText from '../common/MoneyText';
import EmptyState from '../common/EmptyState';
import { calculateExpensePercentage } from '../../services/financeCalculator';
import { formatPercent, formatDate } from '../../utils/formatters';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  card: { width: '100%' },
  cardInner: { flex: 1 },
  row: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 4 },
  name: { fontWeight: 'bold', fontSize: 16, color: colors.dark },
  budget: { color: '#888', fontSize: 14 },
  meta: { color: '#555', fontSize: 12, marginTop: 4 },
  track: { width: '100%', height: 6, backgroundColor: '#E0E0E0', borderRadius: 3, marginTop: 6, overflow: 'hidden' },
  actions: { flexDirection: 'row', marginTop: 8 },
  actionWrap: { flex: 1, marginHorizontal: 4 },
});

const renderItem = (item, onEdit, onDelete) => {
  const pct = Math.min(100, Math.max(0, calculateExpensePercentage(item.realAmount, item.budgetAmount)));
  return (
    <AppCard style={styles.card}>
      <View style={styles.cardInner}>
        <Text style={styles.name}>{item.name}</Text>

        <View style={styles.row}>
          <Text style={styles.budget}>Meta:</Text>
          <MoneyText amount={Number(item.budgetAmount) || 0} style={styles.budget} />
        </View>
        <View style={styles.row}>
          <Text>Ahorrado:</Text>
          <MoneyText amount={Number(item.realAmount) || 0} />
        </View>
        <View style={styles.row}>
          <Text style={styles.meta}>Progreso:</Text>
          <Text style={styles.meta}>{formatPercent(pct)}</Text>
        </View>

        <View style={styles.track}>
          <View style={{ width: `${pct}%`, height: 6, backgroundColor: colors.success }} />
        </View>

        {item.targetDate ? (
          <Text style={styles.meta}>Fecha objetivo: {formatDate(item.targetDate)}</Text>
        ) : null}

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

const SavingList = ({ items, onEdit, onDelete }) => {
  if (!items || items.length === 0) {
    return <EmptyState message="Sin metas de ahorro" icon="wallet" />;
  }
  return (
    <FlatList
      data={items}
      keyExtractor={(it) => String(it.id)}
      renderItem={({ item }) => renderItem(item, onEdit, onDelete)}
      contentContainerStyle={{ padding: 8 }}
    />
  );
};

SavingList.propTypes = {
  items: PropTypes.array.isRequired,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

SavingList.defaultProps = {
  onEdit: null,
  onDelete: null,
};

export default SavingList;
