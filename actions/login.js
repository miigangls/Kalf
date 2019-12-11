import * as SecureStore from 'expo-secure-store';
import { Alert } from 'react-native';
import {makeid } from '../utils/ui';
import {saveFile} from '../utils/file';
import {route } from './route'

export function login(email, password) {
  return async (dispatch) => {
    let profile = JSON.parse(await SecureStore.getItemAsync('profile_data'))
    if (email != profile.email && password != profile.password ) return Alert.alert('Error al Ingresar', 'El email o contraseña son incorrectos.')
      let user = {
        userId: makeid(50),
        email,
        password
      }
      await saveFile('configuration', 'user', user)
      SecureStore.setItemAsync('user_data', JSON.stringify(user))
      await dispatch(route('dashbord'))
  };
}

export function logout() {
  let title = 'Cerrar', message = 'Está seguro que desea salir?'
  return (dispatch, getState) => {
    let {uploadState} = getState()
      title = 'Alerta'
      message = 'Está seguro que desea salir?'
    Alert.alert(title, message, [
      {text: 'Sí', onPress: async () => {
        await SecureStore.deleteItemAsync('user_data')
        await SecureStore.deleteItemAsync('profile_data')
        await deleteDirs()
        dispatch({type: 'USER_LOGOUT'})
      }},
      {text: 'No', onPress: () => {}, style: 'cancel'}
    ])
  };
}
