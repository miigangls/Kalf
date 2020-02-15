let defaultState = {
  data: [],
}
const expense = (state = defaultState, action) => {
  switch (action.type) {
    case 'CONFIGURATION-TCARDS-GET': return Object.assign({}, state, {data: action.expenses})
    case 'CONFIGURATION-TCARDS-REMOVE': return {}
    default: return state
  }
}

export default expense
