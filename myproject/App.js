import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React, { UserState, useState } from 'react';

export default function App() {
  const [name, setName] = useState('Shaun');
  const [age, setAge] = useState('35');

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput
        multiline
        keyboardType=''
        style={styles.input}
        placeholder='e.g Sydwell'
        onChangeText={(val) => setName(val)} />

      <Text>Enter age:</Text>
      <TextInput
        keyboardType='numeric'
        style={styles.input}
        placeholder='e.g 100'
        onChangeText={(val) => setAge(val)} />
      <Text>name: {name}, age: {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 9,
    margin: 10,
    width: 200
  }
});
