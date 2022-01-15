import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import axios from 'axios'

const baseUrl = 'http://localhost:8000'
const loginUrl = `${baseUrl}/api/login`
const registerUrl = `${baseUrl}/api/register`

const LoginForm = ({ componentNavigation }: any) => {
  const [usernameField, setUsernameField] = useState('')
  const [passwordField, setPasswordField] = useState('')

  const sendLogin = async () => {
    axios.post(loginUrl, {
      username: usernameField,
      password: passwordField
    })
      .then((response) => {
        console.log(response)
        componentNavigation.navigate('Home')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const sendRegister = async () => {
    axios.post(registerUrl, {
      username: usernameField,
      password: passwordField
    })
      .then((response) => {
        console.log(response)
        // TODO: Remember to let the user know they've successfully registered!!
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <View style={styles.container}>
      <TextInput
        label='Username'
        value={usernameField}
        onChangeText={text => setUsernameField(text)}
        autoComplete={'username'}
      />
      <View style={styles.padding} />
      <TextInput
        label='Password'
        value={passwordField}
        onChangeText={text => setPasswordField(text)}
        autoComplete={'password'}
        secureTextEntry={true}
      />
      <View style={styles.padding} />
      <View style={styles.buttons}>
        <Button
          children='Login'
          mode='contained'
          onPress={async () => await sendLogin()}
        />
        <Button
          children='Register'
          mode='outlined'
          onPress={async () => await sendRegister()}
        ></Button>
      </View>
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

export default LoginForm;