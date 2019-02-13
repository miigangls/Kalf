import { StyleSheet, Dimensions } from 'react-native';

let window = Dimensions.get('window')

const COLORS = {
  PrimaryColor: '#FFF',
  SecondaryColor:'#cccccc',
  TertiaryColor:'#858585',
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
    backgroundColor: COLORS.PrimaryColor,
  },
  centeredContainer: {
    flex: 1,

    backgroundColor: COLORS.PrimaryColor
  }
};



Styles.home = StyleSheet.create({
    main: {
        width: 'auto',
        height:  window.height * 1.9,
        backgroundColor: COLORS.PrimaryColor
    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        width: 'auto',
        height: 120,
        backgroundColor: COLORS.SecondaryColor,
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10
    }

});

export default Styles;
