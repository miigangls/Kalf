import { combineReducers } from 'redux'

import router from './router'
import user from './user'
import ready from './ready'

const appReducer = combineReducers({
  router,
  user,
  ready
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer;
