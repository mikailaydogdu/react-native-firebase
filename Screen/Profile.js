import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'

const ProfilePage = ({ screenName }) => {
  const navigation = useNavigation();
  screenName = "Home"

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate(screenName)
      })
      .catch(error => alert(error.message))
  }
  return (
    <View style={styles.container}>
       <ScrollView
        style={{ flex: 1, width: '100%' }}
        keyboardShouldPersistTaps="always">
      <Text  style={styles.input}>
        {auth.currentUser ?
         "Welcome " + auth.currentUser.email :
          " Welcome Guest"
        }</Text>
      <TouchableOpacity onPress={handleLogout} style={styles.button}>
        <Text style={styles.buttonTitle}>Logout</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default ProfilePage;