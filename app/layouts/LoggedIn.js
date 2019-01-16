import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Home} from '../routes';
import Styles from '../styles';

import { connect } from 'react-redux'
import Actions from '../actions/index.js'

class LoggedInLayout extends Component {
  render() {
    return (
      <View >
        <Home />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  let groupId = "";
  if (state.configs) groupId = state.configs.groupId;
  return { groupId }
}

const mapDispatchToProps = (dispatch) => {
  return { init: () => { dispatch(Actions.init()) }}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoggedInLayout)
