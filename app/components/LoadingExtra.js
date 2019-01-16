import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import Styles from '../styles';

class Loading extends React.Component {
  render() {
    return (
      <View style={Styles.loading.container}>
        <View>
          {this.props.extra.map((e, i) => {
            return <Text key={i} style={Styles.loading.extra}>{e}</Text>
          })}
        </View>
        <ActivityIndicator
          animating
          size={this.props.size}
          {...this.props}
        />
      </View>
    );
  }
  onClose() {
    // dispatch({type: 'CLEAR_LOADING_EXTRA'})
    // dispatch(actions.closeModal())
  }
}

export default Loading;
