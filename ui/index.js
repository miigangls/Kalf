import Main from './main'
import { connect } from 'react-redux'

import { appStartUp , appShutDown, appRestart} from '../actions/app'


const mapStateToProps = (state) => {
  let {user, router, ready} = state
  return {
    user,
    ready,
    router:router.name
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
