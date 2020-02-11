import CreditCard from './creditCard'
import { connect } from 'react-redux'
import {route} from '../../../actions/route'
import {login } from '../../../actions/login'
import {loadData, setModal, onRequestClose} from '../../../actions/expense'

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
  onRequestClose: (state)=> dispatch(onRequestClose(state)),
  setModalVisible:(state, botton)=> dispatch(setModal(state, botton)),
  onRoute: (value) => dispatch(route(value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreditCard)
