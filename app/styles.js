import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
// Mobile Styles
let imageSize = 60;
let imageRadius = 30;
let paddingLeft = 10;
let buttonHeight = 40;

const styles = StyleSheet.create ({
  rootContainer: {
    flex: 1,
    backgroundColor: '#B0BEC5',
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null
  },
  topContainer: {
    flex: 0.25,
    justifyContent: 'flex-end',
    paddingLeft: paddingLeft,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#546E7A',
    backgroundColor: '#546E7A'
  },
  userImageContainer: {
    height: imageSize,
    width: imageSize,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: imageRadius,
    overflow: 'hidden'
  },
  userImage: {
    height: imageSize,
    width: imageSize,
    borderRadius: imageRadius,
    resizeMode: 'contain'
  },
  name: {
    color:'#ffffff',
    fontWeight: 'bold',
    fontSize: 18
  },
  role: {
    color:'#ffffff',
    fontWeight: 'bold',
    paddingTop: 5,
    fontSize: 15
  },
  bottomContainer: {
    flex: 0.65,
    backgroundColor: '#B0BEC5'
  },
  nameContainer: {
    paddingTop: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    height: buttonHeight,
    alignItems: 'center',
    paddingLeft: paddingLeft
  },
  footerContainer: {
    flex: 0.1,
    backgroundColor: '#B0BEC5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
    fontSize: 12
  },
  label: {
    paddingLeft: 10,
    color: 'black'
  }
});

module.exports = styles
