import { StyleSheet } from 'react-native';
import  SignIn from './login'
import Register  from  './register'
import Main from './main'

let Styles = {}
Styles.signIn = StyleSheet.create({...SignIn});
Styles.register = StyleSheet.create({...Register});
Styles.main = StyleSheet.create({...Main});


export default Styles;
