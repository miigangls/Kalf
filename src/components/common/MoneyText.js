import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'native-base';
import colors from '../../constants/colors';
import { formatMoney } from '../../utils/money';

const base = { fontSize: 16 };

const MoneyText = ({ amount, currency, style, negative }) => (
  <Text style={[base, negative && { color: colors.danger }, style]}>
    {formatMoney(amount, currency)}
  </Text>
);

MoneyText.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string,
  style: PropTypes.object,
  negative: PropTypes.bool,
};

MoneyText.defaultProps = {
  currency: 'COP',
  style: null,
  negative: false,
};

export default MoneyText;
