import React, { useEffect, useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

import { auth } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'


const LoginPage = ({ screenName }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState("");
  const navigation = useNavigation();
  screenName = "Profile"



  const handleLogIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigation.navigate(screenName)
        setEmail('')
        setPassword('')
      })
      .catch(error => setMessage(error.message))
    setTimeout(() => {
      setMessage("")
    }, 2000)
  }


  return (
    <View style={styles.container}>
      <View
        style={{ flex: 1, width: '100%' }}
        keyboardShouldPersistTaps="always">
        <Image
          style={styles.logo}
          source={"https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?w=2000"}
        />
        <TextInput
          style={styles.input}
          placeholder='E-mail'
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder='Password'
          onChangeText={(text) => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleLogIn()}>
          <Text style={styles.buttonTitle}>Log in</Text>
        </TouchableOpacity>
        <View style={styles.footerView}>
          <Text style={styles.footerText}>Don't have an account? <Text onPress={() => navigation.navigate("register")} style={styles.footerLink}>Sign up</Text></Text>
        </View>
      </View>
    </View>
  );
}

export default LoginPage;