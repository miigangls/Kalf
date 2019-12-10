import Register from './register'
import { connect } from 'react-redux'
import { registrar } from '../../actions/register'

const mapStateToProps = (state) => {
  console.log(state);
  return {  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    registrar: (data) => dispatch(registrar(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)
