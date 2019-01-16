import React, { Component } from 'react';
import config from './config.js';
import { View, StatusBar, Text } from 'react-native';
import Styles from './styles';

import AgroPatternsReducer, {initialState} from './reducers'
import Permissions from 'react-native-permissions';

//redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import Meteor, { createContainer } from 'react-native-meteor';
import thunk from 'redux-thunk';
import { connect } from 'react-redux'
import Actions from './actions/index.js'

import LoggedIn from './layouts/LoggedIn.js';

Meteor.connect(config.url);
let store = createStore(AgroPatternsReducer,  applyMiddleware(thunk))

class AgroPatterns extends Component {
  render() {
    return(
      <Provider store={store}>
        <AgroPatternsRedux {...this.props} />
      </Provider>
    )
  }
}

export default createContainer(params=>{
  let status = Meteor.status();
  return { connected: status.connected };
}, AgroPatterns)

class AgroPatternsView extends Component {
  constructor(props) {
    super(props)
    props.init();
  }
  componentDidMount() {
    Permissions.request('location', 'always');
  }
  render() {
    return(
      <View>
        <LoggedIn />
      </View>
    )
  }
};

const mapStateToProps = (state) => {
  let groupId;
  if (state.configs) groupId = state.configs.groupId;
  return { groupId }
}

const mapDispatchToProps = (dispatch) => {
  return { init: () => { dispatch(Actions.init()) }}
}

const AgroPatternsRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(AgroPatternsView)
