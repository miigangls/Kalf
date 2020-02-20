import CreditCard from './creditCard'
import { connect } from 'react-redux'
import {route} from '../../../actions/route'
import {login } from '../../../actions/login'
import {loadData, updateData} from '../../../actions/tCards'

const mapStateToProps = (state) => {
  let {data} = state.tCards
  , {name,  last_name} = state.profile

  return {
    tCards: (data || []),
    name: name
  }
}

const mapDispatchToProps = dispatch => ({
  loadData:()=>  dispatch(loadData()),
  updateData: (state)=>dispatch(updateData(state)),
  onRoute: (value) => dispatch(route(value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreditCard)
