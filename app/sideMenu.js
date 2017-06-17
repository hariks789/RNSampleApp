import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
	Alert,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import moment from 'moment';

class SideMenu extends Component {

  render() {
    return(
      <View style={styles.rootContainer}>
        <View style={styles.topContainer}>
          <View style={styles.userImageContainer}>
            <Image source={require('./user1.png')}
            style={styles.userImage}
            />
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>Jon Snow</Text>
            <Text style={styles.role}>White Wolf</Text>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={
              () => {
                this.props.closeDrawer();
                this.props.navigation.navigate('Screen2');
              }
            }
          >
            <Icon name="rocket" size={20} color='black' />
            <Text style={styles.label}>Screen 2</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.buttonContainer}
          >
            <Icon name="logout" size={20} color='black' />
            <Text style={styles.label}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SideMenu
