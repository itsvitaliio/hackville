import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import axios from 'axios'

const AlanAI = () => {
  return (
    <View style={styles.container}>
      MATT: Insert stuff here!
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    width: 300,
    maxWidth: '80%',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  padding: {
    // flex: 2,
    marginVertical: 5,
    height: 1,
    width: '80%',
  },
})

export default AlanAI
