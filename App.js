import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Aplicativo de Oficinas</Text>
      <StatusBar style="auto" />
      <View style={styles.box1}>
        <Text>Oficina do Gabriel</Text>
      </View>
      <View style={styles.box1}>
        <Text>Oficina do Kauana</Text>
      </View>
      <View style={styles.box1}>
        <Text>Oficina do Fernanda</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box1: {
    backgroundColor: '#EF3',
    width: 380,
    height: 80,
    margin: 5,
  }
});
