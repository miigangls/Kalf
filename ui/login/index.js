import Login from './login'
import { connect } from 'react-redux'
import {route} from '../../actions/route'


const mapStateToProps = (state) => {
  return {  }
}

const mapDispatchToProps = dispatch => ({
  //login: (email, password) => dispatch(login(email, password))
  linkRegister: () => dispatch(route('register'))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
