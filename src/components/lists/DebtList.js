import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text } from 'native-base';
import AppCard from '../common/AppCard';
import AppButton from '../common/AppButton';
import MoneyText from '../common/MoneyText';
import EmptyState from '../common/EmptyState';
import { calculateBudgetDifference } from '../../services/financeCalculator';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  card: { width: '100%' },
  cardInner: { flex: 1 },
  name: { fontWeight: 'bold', fontSize: 16, color: colors.dark, marginBottom: 4 },
  row: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 4 },
  muted: { color: '#888', fontSize: 14 },
  notes: { color: '#888', fontSize: 12, marginTop: 6, fontStyle: 'italic' },
  diffPositive: { color: colors.success, fontSize: 14 },
  diffNegative: { color: colors.danger, fontSize: 14 },
  actions: { flexDirection: 'row', marginTop: 8 },
  actionWrap: { flex: 1, marginHorizontal: 4 },
  payWrap: { marginTop: 8 },
});

const renderItem = (item, onEdit, onDelete, onRegisterPayment) => {
  const diff = calculateBudgetDifference(item.monthlyBudget, item.realPayment);
  return (
    <AppCard style={styles.card}>
      <View style={styles.cardInner}>
        <Text style={styles.name}>{item.name}</Text>

        <View style={styles.row}>
          <Text>Saldo pendiente:</Text>
          <MoneyText amount={Number(item.pendingBalance) || 0} negative />
        </View>
        <View style={styles.row}>
          <Text>Pagado este mes:</Text>
          <MoneyText amount={Number(item.realPayment) || 0} />
        </View>
        <View style={styles.row}>
          <Text style={styles.muted}>Presupuesto mensual:</Text>
          <MoneyText amount={Number(item.monthlyBudget) || 0} style={styles.muted} />
        </View>
        <View style={styles.row}>
          <Text>Diferencia:</Text>
          <Text style={diff < 0 ? styles.diffNegative : styles.diffPositive}>{diff.toFixed(2)}</Text>
        </View>

        {item.notes ? <Text style={styles.notes}>{item.notes}</Text> : null}

        {onRegisterPayment ? (
          <View style={styles.payWrap}>
            <AppButton label="Registrar pago" onPress={() => onRegisterPayment(item)} variant="success" small block />
          </View>
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

const DebtList = ({ items, onEdit, onDelete, onRegisterPayment }) => {
  if (!items || items.length === 0) {
    return <EmptyState message="Sin deudas registradas" icon="card" />;
  }
  return (
    <FlatList
      data={items}
      keyExtractor={(it) => String(it.id)}
      renderItem={({ item }) => renderItem(item, onEdit, onDelete, onRegisterPayment)}
      contentContainerStyle={{ padding: 8 }}
    />
  );
};

DebtList.propTypes = {
  items: PropTypes.array.isRequired,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onRegisterPayment: PropTypes.func,
};

DebtList.defaultProps = {
  onEdit: null,
  onDelete: null,
  onRegisterPayment: null,
};

export default DebtList;
