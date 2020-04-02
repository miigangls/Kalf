import { SET_INCOMES, ADD_INCOME, UPDATE_INCOME, DELETE_INCOME } from './incomesTypes';

const initialState = { items: [] };

export default function incomesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_INCOMES:
      return { ...state, items: action.payload || [] };
    case ADD_INCOME:
      return { ...state, items: [...state.items, action.payload] };
    case UPDATE_INCOME: {
      const { id, changes } = action.payload;
      return { ...state, items: state.items.map((it) => (it.id === id ? { ...it, ...changes } : it)) };
    }
    case DELETE_INCOME:
      return { ...state, items: state.items.filter((it) => it.id !== action.payload) };
    default:
      return state;
  }
}
