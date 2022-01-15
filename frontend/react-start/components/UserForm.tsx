import { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

const sendLogin = () => {

}

const sendCreateAccount = () => {

}

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  return (
    <View style={styles.container}>
      <TextInput
        label='Email'
        value={email}
        onChangeText={text => setEmail(text)}
        autoComplete={'Email'}
      />
      <View style={styles.padding} />
      <TextInput
        label='Password'
        value={pass}
        onChangeText={text => setPass(text)}
        autoComplete={'Password'}
        secureTextEntry={true}
      />
      <View style={styles.padding} />
      <View style={styles.buttons}>
        <Button
          children='Login'
          mode='contained'
          onPress={() => sendLogin()}
        />
        <Button
          children='Create Account'
          mode='outlined'
          onPress={() => sendCreateAccount()}
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
    justifyContent: 'space-between',
    padding: 10,
  },
  padding: {
    // flex: 2,
    marginVertical: 5,
    height: 1,
    width: '80%',
  },
})

export default LoginForm;