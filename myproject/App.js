import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import React, { UserState, useState } from 'react';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'sydwell', key: '1' },
    { name: 'jabi', key: '2' },
    { name: 'susan', key: '3' },
    { name: 'donda', key: '4' },
    { name: 'jeremy', key: '5' },
    { name: 'jason', key: '6' },
    { name: 'tucson', key: '7' },
    { name: 'donda', key: '8' },
    { name: 'jeremy', key: '9' },
    { name: 'jason', key: '10' },
    { name: 'tucson', key: '11' },
  ]);
  const [age, setAge] = useState('35');

  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map((item) => {
          return (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingHorizontal: 20
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',

  }
});
