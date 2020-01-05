let incomeByUser= []
const income = (state = incomeByUser, action) => {
  switch (action.type) {
    case 'CONFIGURATION-INCOME-GET': return action.income
    case 'CONFIGURATION-INCOME-REMOVE': return {}
    default: return state
  }
}

export default income
