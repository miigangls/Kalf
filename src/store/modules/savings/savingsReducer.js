import { SET_SAVINGS, ADD_SAVING, UPDATE_SAVING, DELETE_SAVING } from './savingsTypes';

const initialState = { items: [] };

export default function savingsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SAVINGS:
      return { ...state, items: action.payload || [] };
    case ADD_SAVING:
      return { ...state, items: [...state.items, action.payload] };
    case UPDATE_SAVING: {
      const { id, changes } = action.payload;
      return { ...state, items: state.items.map((it) => (it.id === id ? { ...it, ...changes } : it)) };
    }
    case DELETE_SAVING:
      return { ...state, items: state.items.filter((it) => it.id !== action.payload) };
    default:
      return state;
  }
}
