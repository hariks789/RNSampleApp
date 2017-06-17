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
    backgroundColor: 'white'
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
    borderColor: '#d9d9d9',
    backgroundColor: '#004788'
  },
  userImageContainer: {
    height: imageSize,
    width: imageSize,
    borderWidth: 1,
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
    fontWeight: 'bold'
  },
  role: {
    color:'#ffffff',
    fontWeight: 'bold',
    paddingTop: 5
  },
  bottomContainer: {
    flex: 0.75
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
  label: {
    fontWeight: 'bold',
    paddingLeft: 10
  }
});

module.exports = styles
