import { SET_EXPENSES, ADD_EXPENSE, UPDATE_EXPENSE, DELETE_EXPENSE } from './expensesTypes';

const initialState = { items: [] };

export default function expensesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_EXPENSES:
      return { ...state, items: action.payload || [] };
    case ADD_EXPENSE:
      return { ...state, items: [...state.items, action.payload] };
    case UPDATE_EXPENSE: {
      const { id, changes } = action.payload;
      return { ...state, items: state.items.map((it) => (it.id === id ? { ...it, ...changes } : it)) };
    }
    case DELETE_EXPENSE:
      return { ...state, items: state.items.filter((it) => it.id !== action.payload) };
    default:
      return state;
  }
}
