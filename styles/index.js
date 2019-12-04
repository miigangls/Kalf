import { StyleSheet } from 'react-native';

let Styles = {}
Styles.signIn = StyleSheet.create({
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
      color: "rgba(255, 255, 255, 0.9)",
      height: 45,
      borderRadius:2,
      borderColor: "#fff",
      borderWidth:1,
      fontSize: 16,
      paddingLeft: 45,
      marginLeft:50,
      marginRight:50
    },
    InputConainer: {
      marginTop: 8
    },
    btnLoginIngresar: {
      height: 45,
      width:280,
      borderRadius:2,
      borderColor: "#fff",
      borderWidth:1,
      color: "#FFF",
      marginTop:5,
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

export default Styles;
