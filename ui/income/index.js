import Income from './income'
import { connect } from 'react-redux'
import {route} from '../../actions/route'
import {login } from '../../actions/login'


const mapStateToProps = (state) => {
  let {income} = state
  , total = 0

  income.forEach(({value})=>{
    total += parseFloat(value)
  })

  return {
    incomeByUser: income,
    total
  }
}

const mapDispatchToProps = dispatch => ({
  routeFrom:() => dispatch(route('income-from'))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Income)
