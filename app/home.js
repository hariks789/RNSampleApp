
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
import SideMenu from 'react-native-drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MenuComponent from './sideMenu';

class Home extends Component {
  static navigationOptions = {
    drawerLabel: '',
    header: 'none'
  };

  render() {
    return (
      <SideMenu
        ref={(ref) => this._drawer = ref}
        content={<MenuComponent navigation={this.props.navigation} closeDrawer={()=>this._drawer.close()} />}
        type="overlay"
        tapToClose={true}
        tweenHandler={(ratio) => {
          if(ratio === 0) {
            return {
              mainOverlay: {
                backgroundColor: null
              }};
          } else {
            return {
              mainOverlay: {
                backgroundColor: 'black',
                opacity: ratio - 0.2
              }
            };
          }
        }}
        openDrawerOffset={0.4}
      >
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to Home Screen!!!
          </Text>
          <Button title={'Goto Screen3'} onPress={()=>this.props.navigation.navigate('Screen3', {from: 'Home'})} color={'white'} />
          <Button title={'Open Drawer'} onPress={()=>this._drawer.open()} color={'green'} />
        </View>
      </SideMenu>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#90A4AE',
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
