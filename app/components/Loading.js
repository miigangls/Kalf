import React from 'react';
import {
  View,
  StyleSheet,
  Platform,
  ProgressBarAndroid,
  ActivityIndicator,
} from 'react-native';
import Styles from '../styles';

const IOSLoading = (props) => (
  <ActivityIndicator
    animating
    size={props.size}
    {...props}
  />
);

const AndroidLoading = (props) => (
  <ProgressBarAndroid
    style={{
      height: props.size === 'large' ? 40 : 20,
    }}
    styleAttr="Inverse"
    {...props}
  />
);

const Loading = (props) => {
  let LoadingComponent = IOSLoading;

  return (
    <View style={Styles.loading.container}>
      <LoadingComponent {...props} />
    </View>
  );
};

Loading.propTypes = IOSLoading.propTypes = AndroidLoading.propTypes = {
  size: React.PropTypes.string,
};

Loading.defaultProps = {
  size: 'large',
};

export default Loading;
