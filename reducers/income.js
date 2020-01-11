let defaultState = {
  data: [],
  modal: false,
  form: false,
}
const income = (state = defaultState, action) => {
  switch (action.type) {
      case 'CONFIGURATION-INCOME-GET': return Object.assign({}, state, {data: action.income})
      case 'CONFIGURATION-INCOME-MODAL': return Object.assign({}, state, {modal: action.modal})
      case 'CONFIGURATION-INCOME-FORM': return Object.assign({}, state, {form: action.form})
      case 'CONFIGURATION-INCOME-REMOVE': return {}
    default: return state
  }
}

export default income
