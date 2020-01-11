import Income from './income'
import { connect } from 'react-redux'
import {route} from '../../actions/route'
import {login } from '../../actions/login'
import {loadData, setModal, onRequestClose} from '../../actions/income'

const mapStateToProps = (state) => {
  let {data, modal} = state.income
  , total = 0

  data.forEach(({value})=>{
    total += parseFloat(value)
  })

  return {
    incomeByUser: (data || []),
    total,
    modal
  }
}

const mapDispatchToProps = dispatch => ({
  routeFrom:() => dispatch(route('income-from')),
  loadData:()=>  dispatch(loadData()),
  onRequestClose: (state)=> dispatch(onRequestClose(state)),
  setModalVisible:(state, botton)=> dispatch(setModal(state, botton))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Income)
