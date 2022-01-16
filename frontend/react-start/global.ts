export const config: configType = {
  baseUrl: 'http://localhost:8000',
  username: '',
  background: { uri: require('./assets/paper-background.jpg') },

}

type configType = {
  baseUrl: string
  username: string
  background: { uri: any }
}