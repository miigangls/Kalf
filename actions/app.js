import {saveFile, readFile, buildDirs, deleteDirs} from '../utils/file';
import * as SecureStore from 'expo-secure-store';

export function appStartUp(callback) {
  return dispatch => {
    Promise.all([
      buildDirs(), //prevents no dir error
      SecureStore.getItemAsync('profile_data')
    ]).then(async (values) => {
      let [NaV,profile ] = values
      if (profile) {
        profile = JSON.parse(profile)
        await dispatch({ type: 'CONFIGURATION-PROFILE-SET', profile })
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
