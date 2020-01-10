let defaultState = {
  data: [],
  modal: false,
  form: false,
}
const expense = (state = defaultState, action) => {
  switch (action.type) {
    case 'CONFIGURATION-EXPENSE-GET': return Object.assign({}, state, {data: action.expenses})
    case 'CONFIGURATION-EXPENSE-MODAL': return Object.assign({}, state, {modal: action.modal})
    case 'CONFIGURATION-EXPENSE-FORM': return Object.assign({}, state, {form: action.form})
    case 'CONFIGURATION-EXPENSE-REMOVE': return {}
    default: return state
  }
}

export default expense
