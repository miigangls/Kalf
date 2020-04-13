import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Text, Button } from 'native-base';
import AppCard from '../common/AppCard';
import EmptyState from '../common/EmptyState';
import MoneyText from '../common/MoneyText';
import { formatDate } from '../../utils/formatters';
import colors from '../../constants/colors';

const TYPE_LABELS = {
  income: 'Ingreso',
  expense: 'Gasto',
  saving: 'Ahorro',
  debt: 'Deuda',
};

const TransactionList = ({ items, onEdit, onDelete }) => {
  if (items.length === 0) {
    return <EmptyState message="Sin movimientos" />;
  }
  const sorted = [...items].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  return (
    <View>
      {sorted.map((it) => {
        const negative = it.type === 'expense' || it.type === 'debt';
        const title = it.description ? it.description : it.category;
        return (
          <AppCard key={it.id}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: 'bold' }}>{title}</Text>
              <Text style={{ color: colors.muted, fontSize: 12 }}>
                {TYPE_LABELS[it.type]} · {it.category} · {formatDate(it.date)}
              </Text>
              <MoneyText amount={Number(it.total) || 0} negative={negative} />
              <View style={{ flexDirection: 'row', marginTop: 8 }}>
                {onEdit ? (
                  <Button small light onPress={() => onEdit(it)} style={{ marginRight: 8 }}>
                    <Text>Editar</Text>
                  </Button>
                ) : null}
                {onDelete ? (
                  <Button small danger onPress={() => onDelete(it)}>
                    <Text>Eliminar</Text>
                  </Button>
                ) : null}
              </View>
            </View>
          </AppCard>
        );
      })}
    </View>
  );
};

TransactionList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      date: PropTypes.string,
      total: PropTypes.number,
      type: PropTypes.string,
      category: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

TransactionList.defaultProps = {
  onEdit: null,
  onDelete: null,
};

export default TransactionList;
