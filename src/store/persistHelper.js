import * as storageService from '../services/storageService';

export const buildDataFromState = (state) => {
  const key = state.app.currentMonth;
  const cache = state.app.monthsCache || {};
  const currentMonthData = {
    incomes: state.incomes.items,
    payments: state.payments.items,
    expenses: state.expenses.items,
    savings: state.savings.items,
    debts: state.debts.items,
    transactions: state.transactions.items,
  };
  return {
    settings: {
      currency: state.app.currency,
      currentMonth: state.app.currentMonth,
      userName: state.app.userName,
    },
    months: { ...cache, [key]: currentMonthData },
  };
};

export const persistState = (getState, dispatch) => {
  const data = buildDataFromState(getState());
  if (dispatch) dispatch({ type: 'SET_MONTHS_CACHE', payload: data.months });
  return storageService.saveData(data);
};
