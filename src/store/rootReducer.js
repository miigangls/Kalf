import { combineReducers } from 'redux';
import app from './modules/app/appReducer';
import incomes from './modules/incomes/incomesReducer';
import payments from './modules/payments/paymentsReducer';
import expenses from './modules/expenses/expensesReducer';
import savings from './modules/savings/savingsReducer';
import debts from './modules/debts/debtsReducer';
import transactions from './modules/transactions/transactionsReducer';

export default combineReducers({
  app,
  incomes,
  payments,
  expenses,
  savings,
  debts,
  transactions,
});
