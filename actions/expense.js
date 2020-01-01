import {saveFile} from '../utils/file';
import * as SecureStore from 'expo-secure-store';
import {route } from './route'
import {makeid } from '../utils/ui';
import moment from 'moment'


export function add(userData) {
  return  async (dispatch) => {
    let date = moment()
    console.log(date.day());
    //console.log(date.year());
    /*await  dispatch({ type: 'CONFIGURATION-PROFILE-LOADING', loading: true })
    let user = {
      _id: makeid(50),
      name: userData.name,
      last_name: userData.last_name,
      password: userData.password,
      email: userData.email,
    }
    await saveFile('expenses', 'profile', user)
    SecureStore.setItemAsync('profile_data', JSON.stringify(user))
    await dispatch({ type: 'CONFIGURATION-PROFILE-SET', user })
    await dispatch(route(''))*/
  };
}
