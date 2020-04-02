import { SET_DEBTS, ADD_DEBT, UPDATE_DEBT, DELETE_DEBT } from './debtsTypes';
import { generateId } from '../../../services/idService';
import { now } from '../../../services/dateService';
import { persistState } from '../../persistHelper';

export const setDebts = (items) => ({ type: SET_DEBTS, payload: items });

export const addDebt = (payload) => async (dispatch, getState) => {
  const item = { ...payload, id: generateId('debt'), createdAt: now(), updatedAt: now() };
  dispatch({ type: ADD_DEBT, payload: item });
  await persistState(getState);
  return item;
};

export const updateDebt = (id, changes) => async (dispatch, getState) => {
  dispatch({ type: UPDATE_DEBT, payload: { id, changes: { ...changes, updatedAt: now() } } });
  await persistState(getState);
};

export const deleteDebt = (id) => async (dispatch, getState) => {
  dispatch({ type: DELETE_DEBT, payload: id });
  await persistState(getState);
};
