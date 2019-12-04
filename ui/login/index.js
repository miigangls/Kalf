import Login from './login'
import { connect } from 'react-redux'
/*setTraps
  , setGroupAndFetchStructure, routeToUpload, routeToDownload, route, openMenu, routeToIndirectMonitoringBlock*/


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
)(Login)
