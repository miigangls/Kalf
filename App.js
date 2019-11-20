import React from 'react';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import custom from './native-base-theme/variables/custom';
import { StyleProvider } from 'native-base';
import * as Font from 'expo-font'
//index

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { connect } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import Main from './ui'
import rootReducer from './reducers/index.js'

materialPlus = Object.assign({}, material, custom)

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default class App extends React.Component {
  state = {}
  async componentWillMount() {
    //setMomentLang('es', true)
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ready: true})
  }
  render() {
    return (
      <StyleProvider style={getTheme(materialPlus)}>
        <Provider store={store}>
           <Main />
        </Provider>
      </StyleProvider>
    );
  }
}

/**/
