import { StyleSheet } from 'react-native';
import  SignIn from './login'
import Register  from  './register'

let Styles = {}
Styles.signIn = StyleSheet.create({...SignIn});
Styles.register = StyleSheet.create({...Register});

export default Styles;
