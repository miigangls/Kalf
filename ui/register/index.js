import Register from './register'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
  console.log(state);
  return {  }
}

const mapDispatchToProps = (dispatch) => {
  return {  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)
