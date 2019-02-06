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
    backgroundColor: COLORS.background
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background
  }
};



Styles.home = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  innerContainer: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: COLORS.headerText,
    fontSize: 26
  },
  nameText: {
    fontSize: 26,
    textAlign: 'center',
    color: COLORS.headerText,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  statusTitle: {
    fontSize: 26,
    textAlign: 'center',
    color: COLORS.headerText,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  statusText: {
    fontSize: 24,
    textAlign: 'center',
    color: COLORS.highlight,
    fontWeight: '400',
    marginBottom: 20,
  },
  statusTextSmall: {
    fontSize: 14,
    textAlign: 'center',
    color: COLORS.highlight,
    fontWeight: '400',
    marginBottom: 15,
  },
  logo: {
    width: 200,
    height: 200,
    tintColor: COLORS.mainLighten,
    marginBottom: 50
  },
  buttonRow: {
    flexDirection: 'row',
    margin: 30,
    marginTop: 10
  }
});

export default Styles;
