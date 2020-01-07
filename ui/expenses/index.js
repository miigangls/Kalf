import Expenses from './expenses'
import { connect } from 'react-redux'
import {route} from '../../actions/route'
import {login } from '../../actions/login'
import {loadData, setModalVisible} from '../../actions/expense'

const mapStateToProps = (state) => {
  let {data, modal} = state.expenses
  , total = 0

  data.forEach(({value})=>{
    total += parseFloat(value)
  })

  return {
    expensesByUser: (data || []),
    total,
    modal
  }
}

const mapDispatchToProps = dispatch => ({
  routeFrom:() => dispatch(route('expense-from')),
  loadData:()=>  dispatch(loadData()),
  setModalVisible:(state)=> dispatch(setModalVisible(state))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Expenses)
