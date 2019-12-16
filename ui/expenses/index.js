import Expenses from './expenses'
import { connect } from 'react-redux'
import {route} from '../../actions/route'
import {login } from '../../actions/login'


const mapStateToProps = (state) => {
  return {  }
}

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password)),
  linkRegister: () => dispatch(route('register'))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Expenses)
