import { SET_DEBTS, ADD_DEBT, UPDATE_DEBT, DELETE_DEBT } from './debtsTypes';

const initialState = { items: [] };

export default function debtsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DEBTS:
      return { ...state, items: action.payload || [] };
    case ADD_DEBT:
      return { ...state, items: [...state.items, action.payload] };
    case UPDATE_DEBT: {
      const { id, changes } = action.payload;
      return { ...state, items: state.items.map((it) => (it.id === id ? { ...it, ...changes } : it)) };
    }
    case DELETE_DEBT:
      return { ...state, items: state.items.filter((it) => it.id !== action.payload) };
    default:
      return state;
  }
}
