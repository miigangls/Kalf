import { SET_INCOMES, ADD_INCOME, UPDATE_INCOME, DELETE_INCOME } from './incomesTypes';
import { generateId } from '../../../services/idService';
import { now } from '../../../services/dateService';
import { persistState } from '../../persistHelper';

export const setIncomes = (items) => ({ type: SET_INCOMES, payload: items });

export const addIncome = (payload) => async (dispatch, getState) => {
  const item = { ...payload, id: generateId('income'), createdAt: now(), updatedAt: now() };
  dispatch({ type: ADD_INCOME, payload: item });
  await persistState(getState, dispatch);
  return item;
};

export const updateIncome = (id, changes) => async (dispatch, getState) => {
  dispatch({ type: UPDATE_INCOME, payload: { id, changes: { ...changes, updatedAt: now() } } });
  await persistState(getState, dispatch);
};

export const deleteIncome = (id) => async (dispatch, getState) => {
  dispatch({ type: DELETE_INCOME, payload: id });
  await persistState(getState, dispatch);
};
