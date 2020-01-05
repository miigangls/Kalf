let expensesByUser= [
  {
    value: 800000,
    name: 'Alquiler',
    note: 'Pagao del arriendo y vivienda.',
    icon:"home"
  },
  {
    value: 60000,
    name: 'Combustible',
    note: 'Consumo de la moto',
    icon:"car"
  },
  {
    value: 60000,
    name: 'Gato/perro',
    note: 'Gastos del perro de comida.',
    icon: "dog"
  },
  {
    value: 10000,
    name: 'Peluquería',
    note: 'Corte de cabello.',
    icon: 'store'
  }
]
const expense = (state = expensesByUser, action) => {
  switch (action.type) {
    case 'CONFIGURATION-EXPENSE-GET': return action.expenses
    case 'CONFIGURATION-EXPENSE-REMOVE': return {}
    default: return state
  }
}

export default expense
