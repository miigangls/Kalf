const profile = (state = {}, action) => {
  switch (action.type) {
    case 'CONFIGURATION-PROFILE-LOADING': return action.loading
    case 'CONFIGURATION-PROFILE-SET': return action.profile
    case 'CONFIGURATION-PROFILE-REMOVE': return {}
    default: return state
  }
}

export default profile
