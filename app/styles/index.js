import { StyleSheet, Dimensions } from 'react-native';

let window = Dimensions.get('window')

const COLORS = {
  background: '#4B5445',
  highlight: '#FFFBCC',
  mainLighten: '#e6ece5', //#CAD3C4
  errorText: '#FA3256',
  headerText: '#e6ece5',
  buttonBackground: '#e6ece5',
  buttonText: '#4B5445',
  inputBackground: '#e6ece5',
  inputDivider: '#4B5445',
  disabled: 'grey',
  green: 'green'
};

let Styles = {COLORS,
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    width: window.width,
    height: window.height,
    backgroundColor: COLORS.background,
  },
  centeredContainer: {
    flex: 1,

    backgroundColor: COLORS.background
  }
};



Styles.home = StyleSheet.create({
    main: {
        width: 'auto',
        height:  window.height * 1.9,
        backgroundColor: 'powderblue'
    },
    menu: {
        width: 'auto',
        height: 100,
        backgroundColor: 'steelblue',
    }

});

export default Styles;
