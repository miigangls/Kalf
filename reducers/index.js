import { combineReducers } from 'redux'

import router from './router'

const appReducer = combineReducers({
  router
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer;
