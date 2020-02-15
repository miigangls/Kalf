import { combineReducers } from 'redux'

import router from './router'
import user from './user'
import ready from './ready'
import profile from './profile'
import expenses  from './expense'
import income from './income'
import tCards from './tCards'

const appReducer = combineReducers({
  router,
  user,
  ready,
  profile,
  expenses,
  income,
  tCards
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer;
