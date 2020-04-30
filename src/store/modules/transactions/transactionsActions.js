import { SET_TRANSACTIONS, ADD_TRANSACTION, UPDATE_TRANSACTION, DELETE_TRANSACTION } from './transactionsTypes';
import { generateId } from '../../../services/idService';
import { now } from '../../../services/dateService';
import { persistState } from '../../persistHelper';

export const setTransactions = (items) => ({ type: SET_TRANSACTIONS, payload: items });

export const addTransaction = (payload) => async (dispatch, getState) => {
  const item = { ...payload, id: generateId('transaction'), createdAt: now(), updatedAt: now() };
  dispatch({ type: ADD_TRANSACTION, payload: item });
  await persistState(getState, dispatch);
  return item;
};

export const updateTransaction = (id, changes) => async (dispatch, getState) => {
  dispatch({ type: UPDATE_TRANSACTION, payload: { id, changes: { ...changes, updatedAt: now() } } });
  await persistState(getState, dispatch);
};

export const deleteTransaction = (id) => async (dispatch, getState) => {
  dispatch({ type: DELETE_TRANSACTION, payload: id });
  await persistState(getState, dispatch);
};
