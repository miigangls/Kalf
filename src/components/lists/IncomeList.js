import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Text, Button } from 'native-base';
import AppCard from '../common/AppCard';
import EmptyState from '../common/EmptyState';
import MoneyText from '../common/MoneyText';
import { formatDate } from '../../utils/formatters';
import colors from '../../constants/colors';

const IncomeList = ({ items, onEdit, onDelete }) => {
  if (items.length === 0) {
    return <EmptyState message="Sin ingresos este mes" />;
  }
  return (
    <View>
      {items.map((it) => (
        <AppCard key={it.id}>
          <Text style={{ fontWeight: 'bold' }}>{it.name}</Text>
          <Text style={{ color: colors.muted, fontSize: 12 }}>{formatDate(it.incomeDate)}</Text>
          <MoneyText value={it.realAmount} />
          <Text style={{ color: colors.muted, fontSize: 12 }}>
            Esperado: <MoneyText value={it.expectedAmount} />
          </Text>
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
        </AppCard>
      ))}
    </View>
  );
};

IncomeList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      incomeDate: PropTypes.string,
      expectedAmount: PropTypes.number,
      realAmount: PropTypes.number,
    })
  ).isRequired,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

IncomeList.defaultProps = {
  onEdit: null,
  onDelete: null,
};

export default IncomeList;
