import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import LoginForm from '../components/LoginForm'

const LoginScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text>Please sign into your RedCat account</Text>
      <View style={styles.padding} />
      <LoginForm componentNavigation={navigation}/>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  padding: {
    marginVertical: 20,
    height: 1,
    width: '80%',
  },
})

export default LoginScreen