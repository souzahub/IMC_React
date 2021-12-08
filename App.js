import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
    StyleSheet,
    Text,
    TextInput,
    View
   } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Altura" keyboardType="numeric"/>
      <TextInput placeholder="Massa"keyboardType="numeric"/>
  
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
});
