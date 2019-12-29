import Expenses from './expenses'
import { connect } from 'react-redux'
import {route} from '../../actions/route'
import {login } from '../../actions/login'


const mapStateToProps = (state) => {
  let expensesByUser= [
    {
      value: '800000',
      type: 'casa',
      name: 'Alquiler',
      note: 'asdfasdf',
      icon:"home"
    },
    {
      value: '60000',
      type: 'transporte',
      name: 'Combustible',
      note: 'asdfasdf',
      icon:"car"
    },
    {
      value: '60000',
      type: 'otros gastos',
      name: 'Gato/perro',
      note: 'asdfasdf',
      icon:"dog"
    }
  ], total = 0
  expensesByUser.forEach(({value})=>{
    total += parseFloat(value)
  })
  return {
    expensesByUser,
    total
  }
}

const mapDispatchToProps = dispatch => ({
  routeFrom:() => dispatch(route('expense-from'))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Expenses)
