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

Styles.button = StyleSheet.create({
  button: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: COLORS.buttonBackground,
    margin: 5,
    borderRadius: 3
  },
  buttonText: {
    color: COLORS.buttonText,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  disabled: { backgroundColor: COLORS.disabled },
  highlight: { backgroundColor: COLORS.highlight }
});

let genericTextInputTextMargin = 20;
Styles.genericTextInput = StyleSheet.create({
  input: {
    height: 40,
    backgroundColor: COLORS.inputBackground,
    marginLeft: genericTextInputTextMargin,
    marginVertical: 5
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.inputDivider,
  },
  inputWrapper: {
    backgroundColor: COLORS.inputBackground,
    width: window.width
  },
});

Styles.signIn = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    marginHorizontal: 30,
  },
  error: {
    height: 28,
    justifyContent: 'center',
    width: window.width,
    alignItems: 'center'
  },
  errorText: {
    color: COLORS.errorText,
    fontSize: 18
  },
  header: {
    marginBottom: 25,
    alignItems: 'center'
  },
  logo: {
    width: 150,
    height: 150,
    tintColor: COLORS.mainLighten
  },
  headerText: {
    fontSize: 30,
    color: COLORS.headerText,
    fontWeight: '600',
    marginTop: 20
  },
  subHeaderText: {
    fontSize: 20,
    color: COLORS.headerText,
    fontWeight: '400'
  },
});

Styles.loading = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  extra: {
    color: COLORS.headerText,
  }
});

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
  modalButton: {

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

Styles.unitSelect = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    height: 50,
    backgroundColor: COLORS.mainLighten,
    borderBottomWidth: 2,
    borderColor: COLORS.background
  },
  text: {
    flex: 1,
  },
});

Styles.toolbar = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 45
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 45
  },
  title: {
    flex: 1,
    fontSize: 20,
    textAlign:'center',
    color: COLORS.mainLighten,
    backgroundColor: COLORS.backgroundColor
  }
})


Styles.responseView = StyleSheet.create({
  toolbar: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLORS.backgroundColor,
    height: 45
  },
  toolbarButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
    marginLeft:1,
    marginRight:1,
    backgroundColor: COLORS.backgroundColor
  },
  toolbarTitle: {
    flex: 1,
    fontSize: 20,
    textAlign:'center',
    // marginLeft: 45,
    color: COLORS.mainLighten,
    backgroundColor: COLORS.backgroundColor
  },
  observe: {
    flex: 1,
    backgroundColor: COLORS.mainLighten,
    justifyContent: 'center',
    alignItems: 'center'
  },
  observeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  observeText: {
    fontSize: 25,
    marginTop: 15
  },
  navigationBar: {
    position: 'relative',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLORS.background
  },
  textView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  text: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: COLORS.mainLighten
  },
  scrollViewStyle: {
    flex: 1,
    backgroundColor: COLORS.mainLighten
  },
  footer: {
    position: 'absolute',
    flex:0.1,
    left: 0,
    right: 0,
    bottom: -40,
    backgroundColor:'green',
    flexDirection:'row',
    height:80,
    alignItems:'center',
  },
  sliderBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    borderBottomWidth: 1,
    borderColor: COLORS.background
  },
  sliderBoxName: {
    position: 'absolute',
    left: 0,
    right: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sliderBoxNameText: {
    fontSize: 16,
    color: COLORS.background
  },
  sliderBoxValue: {
    fontSize: 16,
    paddingLeft: 0,
    paddingRight: 10,
    marginTop: 22,
    color: COLORS.background
  },
  sliderBoxSlider: {
    marginTop: 16,
    flex: 1,
    height: 45,
    marginLeft: 10,
    marginRight: 15,
    paddingVertical: 30,
  }
});

let defaultThumb = {
  width: 25,
  height: 25,
  borderWidth: 1,
  borderRadius: 25,
  backgroundColor: COLORS.background,
  borderColor: COLORS.background
},
greenThumb = Object.assign({}, defaultThumb, {
  backgroundColor: 'green',
  borderColor: 'green'
}),
yellowThumb = Object.assign({}, defaultThumb, {
  backgroundColor: 'yellow',
  borderColor: 'yellow'
}),
redThumb = Object.assign({}, defaultThumb, {
  backgroundColor: 'red',
  borderColor: 'red'
})

Styles.responseViewThumb = StyleSheet.create({
  default: defaultThumb,
  green: greenThumb,
  yellow: yellowThumb,
  red: redThumb
});



Styles.loggedIn = StyleSheet.create({
  content: {
    flex: 1,
  },
  toolbar: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom:  10,
    backgroundColor: COLORS.backgroundColor
  },
  toolbarButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
    backgroundColor: COLORS.backgroundColor
  },
  toolbarTitle: {
    flex: 1,
    fontSize: 20,
    textAlign:'center',
    marginRight: 45,
    color: COLORS.mainLighten,
    backgroundColor: COLORS.backgroundColor
  },
  toolbarCenterTitle: {
    flex: 1,
    fontSize: 20,
    textAlign:'center',
    color: COLORS.mainLighten,
    backgroundColor: COLORS.backgroundColor
  }
});

Styles.offlineNoUser = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  header: {
    marginBottom: 25,
    alignItems: 'center',
  },
  logo: {
    width: 10,
    height: 10
  },
  headerText: {
    fontSize: 30,
    color: COLORS.headerText,
    fontWeight: '600',
  },
  subHeaderText: {
    fontSize: 20,
    color: COLORS.headerText,
    fontWeight: '400',
  },
  textContent: {
    color: COLORS.headerText,
    fontSize: 16
  }
});

Styles.groups = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  toolbar: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom:  10,
    backgroundColor: COLORS.backgroundColor
  },
  toolbarTitle: {
    flex: 1,
    fontSize: 20,
    textAlign:'center',
    color: COLORS.mainLighten,
    backgroundColor: COLORS.backgroundColor
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    height: 50,
    backgroundColor: COLORS.mainLighten,
    borderBottomWidth: 2,
    borderColor: COLORS.background
  },
  text: {
    flex: 1
  }
});


Styles.traps = StyleSheet.create({
  textfield: {
    height: 28,  // have to do it on iOS
    marginTop: 32,
  },
  textfieldWithFloatingLabel: {
    height: 48,  // have to do it on iOS
    marginTop: 10,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: COLORS.mainLighten,
    paddingLeft: 10,
    paddingRight: 10
  }
})
export default Styles;
