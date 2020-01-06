
const expense = (state = [], action) => {
  switch (action.type) {
    case 'CONFIGURATION-EXPENSE-GET': return action.expenses
    case 'CONFIGURATION-EXPENSE-REMOVE': return {}
    default: return state
  }
}

export default expense
