let defaultState = {
  data: [],
  form: {}
}
const tCards = (state = defaultState, action) => {
  switch (action.type) {
    case 'CONFIGURATION-TCARDS-GET': return Object.assign({}, state, {data: action.data})
    case 'CONFIGURATION-TCARDS-FORM': return Object.assign({}, state, {form: action.form})
    case 'CONFIGURATION-TCARDS-REMOVE': return {}
    default: return state
  }
}

export default tCards
