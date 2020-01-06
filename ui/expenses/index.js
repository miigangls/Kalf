import Expenses from './expenses'
import { connect } from 'react-redux'
import {route} from '../../actions/route'
import {login } from '../../actions/login'
import {loadData} from '../../actions/expense'

const mapStateToProps = (state) => {
  let {expenses} = state
  , total = 0

  expenses.forEach(({value})=>{
    total += parseFloat(value)
  })

  return {
    expensesByUser: expenses,
    total
  }
}

const mapDispatchToProps = dispatch => ({
  routeFrom:() => dispatch(route('expense-from')),
  loadData:()=>  dispatch(loadData())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Expenses)
