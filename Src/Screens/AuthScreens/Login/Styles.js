import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../Styles/Colors';
const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  safeViewStyle: {
    backgroundColor: Colors.backgroundColor,
    flex: 1
  },
  mainContainer: {
    marginTop: 20,
    width: widthScreen / 1.1,
    alignSelf: 'center',
    marginBottom: 20
  },
  headerText: {
    fontSize: 35,
    fontWeight: '700',
    color: Colors.White,
    textAlign: "center",
    marginTop: '10%'
  },
  emailMainContainer: {
    marginTop: '2%',
    width: widthScreen / 1.1,
    alignSelf: 'center',
  },
  inputTextStyle: {
    fontSize: 20,
    fontWeight: "400",
    marginTop: '20%',
    color: Colors.White,
    width: widthScreen / 1.25,
    alignSelf: 'center'
  },
  inputTextStyle1: {
    fontSize: 20,
    fontWeight: "400",
    marginTop: 20,
    color: Colors.White,
    width: widthScreen / 1.25,
    alignSelf: 'center'
  },
  emailWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: Colors.texInputBackground,
    borderRadius: 25,
    backgroundColor: Colors.texInputBackground,
    height: 60,
    justifyContent: 'center',
    alignSelf: 'center',
    width: widthScreen / 1.2,
  },
  emailInput: {
    marginLeft: 20,
    flex: 1,
    fontSize: 18,
    margin: 10,
    color: Colors.White
  },
  checkImage: {
    width: 25,
    height: 25,
    marginRight: 10,
    marginTop: 15
  },
  buttonContainer: {
    width: widthScreen / 1.25,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.buttonColor,
    marginTop: '10%',
    alignSelf: 'center',
    borderRadius: 20
  },
  buttonText: {
    color: Colors.White,
    fontSize: 20,
    fontWeight: '600'
  },
  bottomWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  googleWrapper: {
    width: widthScreen / 1.25,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.texInputBackground,
    marginTop: '7%',
    alignSelf: 'center',
    borderRadius: 20
  },
  alreadyAccountText: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: "center",
    color: Colors.White,
  },
  loginTextBottom: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: "center",
    color: Colors.White,
    marginLeft: 10,
  },
  seperatorContainer: {
    borderBottomWidth: 1.5,
    borderBottomColor: Colors.White,
    width: widthScreen / 1.3,
    alignSelf: 'center',
    marginTop: 20
  },
  socialTextStyling: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: "center",
    color: Colors.White,
    marginTop: 25
  },
  googleTextBottom: {
    color: Colors.White,
    fontSize: 24,
    fontWeight: '600'
  }
});
export default styles;
