
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class Screen3 extends Component {
  static navigationOptions = {
    title: 'Screen3',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Screen3!!!
        </Text>
        <Button title={'Goto Screen2'} onPress={()=>this.props.navigation.navigate('Screen2')} color={'white'} />
        <Button title={'Go Back'} onPress={()=>this.props.navigation.goBack()} color={'green'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
