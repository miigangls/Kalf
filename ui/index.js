import Main from './main'
import { connect } from 'react-redux'

import { appStartUp , appShutDown, appRestart} from '../actions/app'


const mapStateToProps = (state) => {
  let {user, route, ready} = state
  return {
    user,
    ready,
    route
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    appStartUp: (callback) => dispatch(appStartUp(callback)),
    appShutDown: () => dispatch(appShutDown()),
    appRestart: () => dispatch(appRestart()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
