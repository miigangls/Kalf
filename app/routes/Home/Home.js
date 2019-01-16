import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import Styles from '../../styles';
import Meteor, { createContainer } from 'react-native-meteor';
import {T9n} from '../../config.js';

import { connect } from 'react-redux';
import Actions from '../../actions/index.js';

class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View>
        <View>
          <Text >Hola Mundo</Text>
        </View>
      </View>
    );
  }
}


const mapStateToProps = (state) => {
  let groupId;
  if (state.configs) groupId = state.configs.groupId;
  return { groupId }
}

const mapDispatchToProps = (dispatch) => {
  return { init: () => { dispatch(Actions.init()) }}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
