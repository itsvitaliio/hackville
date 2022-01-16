import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native'

import LoginForm from '../components/LoginForm'
import { config } from '../global'

const LoginScreen = ({ navigation }: any) => {
  return (
    // <View style={styles.container}>
      <ImageBackground
        source={config.background}
        style={styles.container}
      >
        <Image source={{ uri: require("../assets/grit.png")}} style ={{ width: 400, height: 200}}>
          
        </Image>
        <Text>Please sign into your Grit account</Text>
        <View style={styles.padding} />
        <LoginForm componentNavigation={navigation} />
        <StatusBar style="auto" />
      </ImageBackground>
    // </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
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