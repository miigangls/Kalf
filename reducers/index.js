import { combineReducers } from 'redux'

import router from './router'
import user from './user'
import ready from './ready'
import profile from './profile'
import expenses  from './expense'
import income from './income'

const appReducer = combineReducers({
  router,
  user,
  ready,
  profile,
  expenses,
  income
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer;
