import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { Text } from 'native-base';
import AppCard from '../common/AppCard';
import AppButton from '../common/AppButton';
import MoneyText from '../common/MoneyText';
import EmptyState from '../common/EmptyState';
import colors from '../../constants/colors';
import { formatDate } from '../../utils/formatters';
import { calculateBudgetDifference } from '../../services/financeCalculator';

const styles = StyleSheet.create({
  itemWrap: { padding: 8 },
  inner: { flexDirection: 'column', flex: 1 },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  name: { fontSize: 16, fontWeight: 'bold', color: colors.dark },
  meta: { color: colors.gray, fontSize: 12, marginTop: 2 },
  category: { color: colors.gray, fontSize: 12 },
  amounts: { marginTop: 6 },
  budgetLabel: { color: colors.gray, fontSize: 12 },
  diffLabel: { color: colors.gray, fontSize: 12, marginTop: 4 },
  paid: { color: colors.success, fontWeight: 'bold' },
  actions: { flexDirection: 'row', marginTop: 8 },
  btn: { flex: 1, marginHorizontal: 4 },
});

const PaymentList = ({ items, onEdit, onDelete, onTogglePaid }) => {
  if (!items || items.length === 0) {
    return <EmptyState message="Sin pagos programados" icon="calendar" />;
  }
  return (
    <View>
      {items.map((item) => {
        const diff = calculateBudgetDifference(item.budgetAmount, item.realAmount);
        return (
          <View key={item.id} style={styles.itemWrap}>
            <AppCard>
              <View style={styles.inner}>
                <View style={styles.rowBetween}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.meta}>{formatDate(item.date)}</Text>
                </View>
                <Text style={styles.category}>{item.category}</Text>

                <View style={styles.amounts}>
                  <View style={styles.rowBetween}>
                    <Text style={styles.budgetLabel}>Real</Text>
                    <MoneyText amount={Number(item.realAmount) || 0} negative />
                  </View>
                  <View style={styles.rowBetween}>
                    <Text style={styles.budgetLabel}>Presupuestado</Text>
                    <MoneyText
                      amount={Number(item.budgetAmount) || 0}
                      style={{ color: colors.gray }}
                    />
                  </View>
                  <Text style={styles.diffLabel}>{`Diferencia: ${diff}`}</Text>
                </View>

                <View style={styles.rowBetween}>
                  {item.isPaid ? (
                    <Text style={styles.paid}>Pagado ✓</Text>
                  ) : onTogglePaid ? (
                    <View style={styles.btn}>
                      <AppButton
                        label="Marcar pagado"
                        variant="success"
                        onPress={() => onTogglePaid(item)}
                        block
                      />
                    </View>
                  ) : null}
                </View>

                <View style={styles.actions}>
                  {onEdit ? (
                    <View style={styles.btn}>
                      <AppButton
                        label="Editar"
                        variant="light"
                        onPress={() => onEdit(item)}
                        block
                      />
                    </View>
                  ) : null}
                  {onDelete ? (
                    <View style={styles.btn}>
                      <AppButton
                        label="Eliminar"
                        variant="danger"
                        onPress={() => onDelete(item)}
                        block
                      />
                    </View>
                  ) : null}
                </View>
              </View>
            </AppCard>
          </View>
        );
      })}
    </View>
  );
};

PaymentList.propTypes = {
  items: PropTypes.array,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onTogglePaid: PropTypes.func,
};

PaymentList.defaultProps = {
  items: [],
  onEdit: null,
  onDelete: null,
  onTogglePaid: null,
};

export default PaymentList;
