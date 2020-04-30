import { SET_SAVINGS, ADD_SAVING, UPDATE_SAVING, DELETE_SAVING } from './savingsTypes';
import { generateId } from '../../../services/idService';
import { now } from '../../../services/dateService';
import { persistState } from '../../persistHelper';

export const setSavings = (items) => ({ type: SET_SAVINGS, payload: items });

export const addSaving = (payload) => async (dispatch, getState) => {
  const item = { ...payload, id: generateId('saving'), createdAt: now(), updatedAt: now() };
  dispatch({ type: ADD_SAVING, payload: item });
  await persistState(getState, dispatch);
  return item;
};

export const updateSaving = (id, changes) => async (dispatch, getState) => {
  dispatch({ type: UPDATE_SAVING, payload: { id, changes: { ...changes, updatedAt: now() } } });
  await persistState(getState, dispatch);
};

export const deleteSaving = (id) => async (dispatch, getState) => {
  dispatch({ type: DELETE_SAVING, payload: id });
  await persistState(getState, dispatch);
};
