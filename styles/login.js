import { StyleSheet } from 'react-native';


let signIn = StyleSheet.create({
    LogoText: {
      fontSize: 35,
      fontWeight: '500',
      textAlign: "center",
      marginTop: 20,
      marginBottom: 15,
      color: "white",
      opacity: 0.85,
      padding: 50
    },
    Input: {
      backgroundColor:'transparent',
      color: "rgba(255, 255, 255, 0.6)",
      height: 45,
      width:280,
      borderRadius:2,
      borderColor: "rgba(255, 255, 255, 0.6)",
      borderWidth:1,
      fontSize: 16,
      paddingLeft: 15,
      marginTop: 25,
      marginLeft:'auto',
      marginRight:'auto',
    },
    InputConainer: {
      marginTop: 8
    },
    btnLoginIngresar: {
      height: 45,
      width:200,
      borderRadius:2,
      borderColor: "#fff",
      borderWidth:1,
      color: "#FFF",
      marginTop:45,
      marginLeft:'auto',
      marginRight:'auto',
      backgroundColor:'transparent',
      justifyContent: 'center',
      textTransform: 'uppercase'
    },
    btnLoginRegistrar: {
      height: 45,
      width:280,
      borderWidth:0,
      marginTop:5,
      marginLeft:'auto',
      marginRight:'auto',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'transparent',
      justifyContent: 'center'
    }
});

export default signIn
