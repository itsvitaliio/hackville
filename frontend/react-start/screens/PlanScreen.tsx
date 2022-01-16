import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

import Plan from '../components/Plan'
import { config } from '../global'

const PlanScreen = () => {
  return (
    // <View style={styles.container}>
    <ImageBackground
      source={config.background}
      style={styles.container}
    >
      <Plan />
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

export default PlanScreen
