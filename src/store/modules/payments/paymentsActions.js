import { SET_PAYMENTS, ADD_PAYMENT, UPDATE_PAYMENT, DELETE_PAYMENT } from './paymentsTypes';
import { generateId } from '../../../services/idService';
import { now } from '../../../services/dateService';
import { persistState } from '../../persistHelper';

export const setPayments = (items) => ({ type: SET_PAYMENTS, payload: items });

export const addPayment = (payload) => async (dispatch, getState) => {
  const item = { ...payload, id: generateId('payment'), createdAt: now(), updatedAt: now() };
  dispatch({ type: ADD_PAYMENT, payload: item });
  await persistState(getState);
  return item;
};

export const updatePayment = (id, changes) => async (dispatch, getState) => {
  dispatch({ type: UPDATE_PAYMENT, payload: { id, changes: { ...changes, updatedAt: now() } } });
  await persistState(getState);
};

export const deletePayment = (id) => async (dispatch, getState) => {
  dispatch({ type: DELETE_PAYMENT, payload: id });
  await persistState(getState);
};
