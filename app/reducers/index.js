import { combineReducers } from 'redux'
import update from 'immutability-helper'

const initialState = {
  configs: {
    userId: "",
    groupId: "",
    groupName: "",
    username: "",
    weekStart: 0
  }
}

export default AgroPatternsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT':
      if (!action.configs) return state
      return update(state, {configs:
        {
          userId: {$set: action.configs.userId },
          username: {$set: action.configs.username },
          groupId: {$set: action.configs.groupId },
          groupName: {$set: action.configs.groupName },
          weekStart: {$set: action.configs.weekStart }
        }
      });
    default: return state;
  }
}
