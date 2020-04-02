import { SET_TRANSACTIONS, ADD_TRANSACTION, UPDATE_TRANSACTION, DELETE_TRANSACTION } from './transactionsTypes';

const initialState = { items: [] };

export default function transactionsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TRANSACTIONS:
      return { ...state, items: action.payload || [] };
    case ADD_TRANSACTION:
      return { ...state, items: [...state.items, action.payload] };
    case UPDATE_TRANSACTION: {
      const { id, changes } = action.payload;
      return { ...state, items: state.items.map((it) => (it.id === id ? { ...it, ...changes } : it)) };
    }
    case DELETE_TRANSACTION:
      return { ...state, items: state.items.filter((it) => it.id !== action.payload) };
    default:
      return state;
  }
}
