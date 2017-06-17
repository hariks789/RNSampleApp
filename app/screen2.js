
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class Screen2 extends Component {
  static navigationOptions = {
    drawerLabel: 'Screen2',
    drawerIcon: ({ tintColor }) => (
      <MaterialIcons name="drafts" size={24} style={{ color: tintColor }} />
    ),
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Screen2!!!
        </Text>
        <Button title={'Go Back'} onPress={()=>this.props.navigation.goBack()} color={'white'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#26A69A',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
