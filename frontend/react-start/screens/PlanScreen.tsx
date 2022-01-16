import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import Plan from '../components/Plan'

const PlanScreen = () => {
  return (
    <View style={styles.container}>
      <Plan />
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

export default PlanScreen
