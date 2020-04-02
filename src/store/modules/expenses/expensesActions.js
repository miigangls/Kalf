import { SET_EXPENSES, ADD_EXPENSE, UPDATE_EXPENSE, DELETE_EXPENSE } from './expensesTypes';
import { generateId } from '../../../services/idService';
import { now } from '../../../services/dateService';
import { persistState } from '../../persistHelper';

export const setExpenses = (items) => ({ type: SET_EXPENSES, payload: items });

export const addExpense = (payload) => async (dispatch, getState) => {
  const item = { ...payload, id: generateId('expense'), createdAt: now(), updatedAt: now() };
  dispatch({ type: ADD_EXPENSE, payload: item });
  await persistState(getState);
  return item;
};

export const updateExpense = (id, changes) => async (dispatch, getState) => {
  dispatch({ type: UPDATE_EXPENSE, payload: { id, changes: { ...changes, updatedAt: now() } } });
  await persistState(getState);
};

export const deleteExpense = (id) => async (dispatch, getState) => {
  dispatch({ type: DELETE_EXPENSE, payload: id });
  await persistState(getState);
};
