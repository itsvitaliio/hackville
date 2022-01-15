import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import axios from 'axios'

const baseUrl = 'http://localhost:8000/'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const sendLogin = async () => {
    // const url = `${baseUrl}/api/users/1`
    // const res = await axios.get(url)
    // console.log(res.data)
    // navigation.navigate('Modal')
  }

  const sendCreateAccount = async () => {
    // BASIC
    // const url = `${baseUrl}/api/users/1`
    // const res = await axios.get(url)
    // console.log(res.data)

    // POST CALL
    // axios.post('/user', {
    //   firstName: 'Fred',
    //   lastName: 'Flintstone'
    // })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    // GET CALL
    // axios.get('/user?ID=12345')
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }

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
          onPress={async () => await sendLogin()}
        />
        <Button
          children='Create Account'
          mode='outlined'
          onPress={async () => await sendCreateAccount()}
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