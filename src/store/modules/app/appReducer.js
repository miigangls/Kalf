import {
  LOAD_DATA_START,
  LOAD_DATA_SUCCESS,
  LOAD_DATA_ERROR,
  SET_CURRENT_MONTH,
  SET_ACTIVE_TAB,
  SET_USER_NAME,
} from './appTypes';

const initialState = {
  loading: false,
  error: null,
  currentMonth: '2020-01',
  activeTab: 'dashboard',
  userName: 'Miguel',
  currency: 'COP',
  initialized: false,
  monthsCache: {},
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA_START:
      return { ...state, loading: true, error: null };
    case LOAD_DATA_SUCCESS: {
      const { settings, data } = action.payload || {};
      return {
        ...state,
        loading: false,
        error: null,
        initialized: true,
        currency: (settings && settings.currency) || state.currency,
        currentMonth: (settings && settings.currentMonth) || state.currentMonth,
        userName: (settings && settings.userName) || state.userName,
        monthsCache: (data && data.months) || {},
      };
    }
    case 'SET_MONTHS_CACHE':
      return { ...state, monthsCache: action.payload };
    case LOAD_DATA_ERROR:
      return { ...state, loading: false, error: action.payload };
    case SET_CURRENT_MONTH:
      return { ...state, currentMonth: action.payload };
    case SET_ACTIVE_TAB:
      return { ...state, activeTab: action.payload };
    case SET_USER_NAME:
      return { ...state, userName: action.payload };
    default:
      return state;
  }
}
