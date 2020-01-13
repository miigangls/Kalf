import {saveFile} from '../utils/file';
import * as SecureStore from 'expo-secure-store';
import {route } from './route'
import {makeid } from '../utils/ui';

export function registrar(userData) {
  return  async (dispatch) => {
    let user = {
      _id: makeid(50),
      name: userData.name,
      last_name: userData.last_name,
      password: userData.password,
      email: userData.email,
    }
    await saveFile('configuration', 'profile', user)
    SecureStore.setItemAsync('profile_data', JSON.stringify(user))
    await dispatch(route(''))
    await dispatch({ type: 'CONFIGURATION-PROFILE-SET', user })
  };
}
