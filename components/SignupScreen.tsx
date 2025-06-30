import React, { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const SignupScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Basic validation
    if (!name || !phoneNumber || !email || !password) {
      Alert.alert('Missing Info', 'Please fill in all fields.');
      return;
    }

    // Log input (you can replace this with an API call later)
    console.log('Signing up with:', name, phoneNumber, email, password);
    Alert.alert('Success', 'Sign up successful!');
  };

  const handleFacebookLogin = () => {
    console.log('Login with Facebook');
    Alert.alert('Info', 'Facebook login clicked.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
        keyboardType="default"
      />

      <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        style={styles.input}
        keyboardType="phone-pad"
      />

      <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

      <Pressable style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>

      <Text style={styles.orText}>or</Text>

      <Pressable style={[styles.button, styles.fbButton]} onPress={handleFacebookLogin}>
        <Text style={styles.buttonText}>Login With Facebook</Text>
      </Pressable>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    marginBottom: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#802BB1',
  },
  input: {
    height: 48,
    borderColor: '#2D283E',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  button: {
    backgroundColor: '#802BB1',
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 12,
    alignItems: 'center',
  },
  fbButton: {
    backgroundColor: '#3b5998',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  orText: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 16,
    color: 'black',
  },
});
