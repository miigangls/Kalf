import React from 'react';
import { Provider } from 'react-redux';
import { StyleProvider, Root } from 'native-base';
import getTheme from 'native-base/src/theme/components';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import store from './src/store';
import { loadAppData } from './src/store/modules/app/appActions';
import RootScreen from './src/screens/RootScreen';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fontsReady: false };
  }

  async componentDidMount() {
    try {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      });
    } catch (e) {
      // continúa aunque falten fuentes
    }
    this.setState({ fontsReady: true });
    store.dispatch(loadAppData());
  }

  render() {
    if (!this.state.fontsReady) {
      return null;
    }
    return (
      <Provider store={store}>
        <StyleProvider style={getTheme()}>
          <Root>
            <RootScreen />
          </Root>
        </StyleProvider>
      </Provider>
    );
  }
}
