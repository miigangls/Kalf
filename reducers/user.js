const user = (state = {}, action) => {
  switch (action.type) {
    case 'CONFIGURATION-USER-LOADING': return action.loading
    case 'CONFIGURATION-USER-SET': return action.user
    case 'CONFIGURATION-USER-REMOVE': return {}
    default: return state
  }
}

export default user
