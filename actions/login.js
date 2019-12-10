

export function login(email, password) {
  return (dispatch) => {
    dispatch({ type: 'CONFIGURATION-USER-LOADING', loading: true })

    /*fetchLogin(email, password).then(userData => {
      let user = {
        userId: userData._id,
        name: userData.profile.username,
        language: userData.profile.language,
        passhex: userData.passhex
      }*/
      SecureStore.setItemAsync('user', JSON.stringify(user))
      dispatch({ type: 'CONFIGURATION-USER-SET', user })
      dispatch({type: 'CONFIGURATION-NOT_READY'})
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
