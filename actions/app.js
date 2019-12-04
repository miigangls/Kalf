import {saveFile, readFile, buildDirs, deleteDirs} from '../utils/file';
import * as SecureStore from 'expo-secure-store';

export function appStartUp(callback) {
  return dispatch => {
    Promise.all([
      buildDirs(), //prevents no dir error
      SecureStore.getItemAsync('user_data'),
      readFile('configuration', 'users'),
    ]).then(async (values) => {
      //let [NaV, user] = values
      console.log(values, 'configuration');
      if (user) {
        user = JSON.parse(user)
        await dispatch({ type: 'CONFIGURATION-USER-SET', user })
      }

      dispatch({type: 'CONFIGURATION-READY'})
      callback()
    }).catch(console.log)
  }
}


export function appShutDown() {
  return async (dispatch, getState) => {

  }
}

export function appRestart() {
  return async (dispatch, getState) => {
  }
}
