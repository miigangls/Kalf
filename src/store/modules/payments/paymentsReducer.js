import { SET_PAYMENTS, ADD_PAYMENT, UPDATE_PAYMENT, DELETE_PAYMENT } from './paymentsTypes';

const initialState = { items: [] };

export default function paymentsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PAYMENTS:
      return { ...state, items: action.payload || [] };
    case ADD_PAYMENT:
      return { ...state, items: [...state.items, action.payload] };
    case UPDATE_PAYMENT: {
      const { id, changes } = action.payload;
      return { ...state, items: state.items.map((it) => (it.id === id ? { ...it, ...changes } : it)) };
    }
    case DELETE_PAYMENT:
      return { ...state, items: state.items.filter((it) => it.id !== action.payload) };
    default:
      return state;
  }
}
