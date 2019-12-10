

export function login(email, password) {
  return (dispatch) => {
    
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
