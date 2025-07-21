import React, { useState } from 'react';
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const SignupScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSignup = () => {
    if (!name || !phoneNumber || !email || !password) {
      Alert.alert('Missing Info', 'Please fill in all fields.');
      return;
    }

    console.log('Signing up with:', name, phoneNumber, email, password);
    Alert.alert('Success', 'Sign up successful!');
    setSubmitted(true);
  };

  const handleClear = () => {
    setName('');
    setPhoneNumber('');
    setEmail('');
    setPassword('');
    setSubmitted(false);
  };

  const handleFacebookLogin = () => {
    console.log('Login with Facebook');
    Alert.alert('Info', 'Facebook login clicked.');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
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
        autoCapitalize="none"
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

      <Pressable style={styles.button} onPress={handleClear}>
        <Text style={styles.buttonText}>Clear</Text>
      </Pressable>

      <Text style={styles.orText}>or</Text>

      <Pressable
        style={[styles.button, styles.fbButton]}
        onPress={handleFacebookLogin}
      >
        <Text style={styles.buttonText}>Login With Facebook</Text>
      </Pressable>

      {submitted && (
        <View style={styles.output}>
          <Text style={styles.outputTitle}>Submitted Information:</Text>
          <Text>Name: {name}</Text>
          <Text>Phone: {phoneNumber}</Text>
          <Text>Email: {email}</Text>
          <Text>Password: {password}</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
  output: {
    marginTop: 30,
    padding: 16,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
  },
  outputTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
