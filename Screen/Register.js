import React, { useEffect, useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './style';

import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const RegisterPage = ({ screenName }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  screenName = "Profile"

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate(screenName)
      })
      .catch(error => alert(error.message))
  }
  return (
    <View style={styles.container}>
            <View
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-7f0rs8Iv0vbzwN5VI0Jj1zUJlqeCGX9gBQ&usqp=CAU"}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Full Name'
                    placeholderTextColor="#aaaaaa"
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
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
                    onPress={() => handleSignUp()}>
                    <Text style={styles.buttonTitle}>Create account</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Already got an account? <Text onPress={() => navigation.navigate("login")} style={styles.footerLink}>Log in</Text></Text>
                </View>
            </View>
        </View>
  );
}



export default RegisterPage;

