import {
  LOAD_DATA_START,
  LOAD_DATA_SUCCESS,
  LOAD_DATA_ERROR,
  SET_CURRENT_MONTH,
  SET_ACTIVE_TAB,
  SET_USER_NAME,
} from './appTypes';
import { SET_INCOMES } from '../incomes/incomesTypes';
import { SET_PAYMENTS } from '../payments/paymentsTypes';
import { SET_EXPENSES } from '../expenses/expensesTypes';
import { SET_SAVINGS } from '../savings/savingsTypes';
import { SET_DEBTS } from '../debts/debtsTypes';
import { SET_TRANSACTIONS } from '../transactions/transactionsTypes';
import * as storageService from '../../../services/storageService';
import demoData from '../../../constants/demoData';

export const loadAppData = () => async (dispatch) => {
  dispatch({ type: LOAD_DATA_START });
  try {
    let data = await storageService.loadData();
    if (!data) {
      data = demoData;
      await storageService.saveData(demoData);
    }
    const settings = data.settings || {};
    dispatch({ type: LOAD_DATA_SUCCESS, payload: { data, settings } });

    const monthKey = settings.currentMonth;
    const monthData = (data.months && data.months[monthKey]) || {};
    dispatch({ type: SET_INCOMES, payload: monthData.incomes || [] });
    dispatch({ type: SET_PAYMENTS, payload: monthData.payments || [] });
    dispatch({ type: SET_EXPENSES, payload: monthData.expenses || [] });
    dispatch({ type: SET_SAVINGS, payload: monthData.savings || [] });
    dispatch({ type: SET_DEBTS, payload: monthData.debts || [] });
    dispatch({ type: SET_TRANSACTIONS, payload: monthData.transactions || [] });
  } catch (error) {
    dispatch({ type: LOAD_DATA_ERROR, payload: error && error.message ? error.message : String(error) });
  }
};

export const setCurrentMonth = (monthKey) => ({ type: SET_CURRENT_MONTH, payload: monthKey });
export const setActiveTab = (tab) => ({ type: SET_ACTIVE_TAB, payload: tab });
export const setUserName = (name) => ({ type: SET_USER_NAME, payload: name });

export const switchMonth = (monthKey) => (dispatch, getState) => {
  const state = getState();
  const cache = (state.app && state.app.monthsCache) || {};
  const monthData = cache[monthKey] || {
    incomes: [], payments: [], expenses: [], savings: [], debts: [], transactions: [],
  };
  dispatch({ type: SET_CURRENT_MONTH, payload: monthKey });
  dispatch({ type: SET_INCOMES, payload: monthData.incomes || [] });
  dispatch({ type: SET_PAYMENTS, payload: monthData.payments || [] });
  dispatch({ type: SET_EXPENSES, payload: monthData.expenses || [] });
  dispatch({ type: SET_SAVINGS, payload: monthData.savings || [] });
  dispatch({ type: SET_DEBTS, payload: monthData.debts || [] });
  dispatch({ type: SET_TRANSACTIONS, payload: monthData.transactions || [] });
};
