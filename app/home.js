
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
  Button
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Screen1 from './screen1';
import Screen2 from './screen2';
import Screen3 from './screen3';

class Home extends Component {
  static navigationOptions = {
    drawerLabel: '',
    header: 'none'
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Home Screen!!!
        </Text>
        <Button title={'Goto Screen3'} onPress={()=>this.props.navigation.navigate('Screen3')} color={'white'} />
        <Button title={'Open Drawer'} onPress={()=>this.props.navigation.navigate('DrawerOpen')} color={'green'} />
      </View>
    );
  }
}

const SideDrawer = DrawerNavigator(
  {
    Home: { screen: Home },
    Screen1: {
      screen: Screen1,
    },
    Screen2: {
      screen: Screen2,
    },
  },
  {
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
  }
);

export default SideDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  container1: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
