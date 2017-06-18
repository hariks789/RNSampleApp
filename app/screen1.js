
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class Screen1 extends Component {
  static navigationOptions = {
    drawerLabel: 'Screen1',
    drawerIcon: ({ tintColor }) => (
      <MaterialIcons name="move-to-inbox" size={24} />
    ),
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Screen1!!!
        </Text>
        <Button title={'Go Back'} onPress={()=>this.props.navigation.goBack()} color={'#37474F'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#78909C',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
