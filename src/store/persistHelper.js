import * as storageService from '../services/storageService';

export const buildMonthData = (state) => ({
  incomes: state.incomes.items,
  payments: state.payments.items,
  expenses: state.expenses.items,
  savings: state.savings.items,
  debts: state.debts.items,
  transactions: state.transactions.items,
});

export const buildSettings = (state) => ({
  currency: state.app.currency,
  currentMonth: state.app.currentMonth,
  userName: state.app.userName,
});

export const buildDataFromState = (state) => {
  const key = state.app.currentMonth;
  const cache = state.app.monthsCache || {};
  return {
    settings: buildSettings(state),
    months: { ...cache, [key]: buildMonthData(state) },
  };
};

export const persistState = async (getState, dispatch) => {
  const state = getState();
  const key = state.app.currentMonth;
  const monthData = buildMonthData(state);
  if (dispatch) {
    const cache = state.app.monthsCache || {};
    dispatch({ type: 'SET_MONTHS_CACHE', payload: { ...cache, [key]: monthData } });
  }
  await storageService.saveSettings(buildSettings(state));
  return storageService.saveMonth(key, monthData);
};
