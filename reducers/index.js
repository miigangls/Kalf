import { combineReducers } from 'redux'

import router from './router'
import user from './user'
import ready from './ready'
import profile from './profile'

const appReducer = combineReducers({
  router,
  user,
  ready,
  profile
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer;
