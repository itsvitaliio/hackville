import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { RootStackParamList } from '../types'
import LinkingConfiguration from './LinkingConfiguration'
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'
import TimelineScreen from '../screens/TimelineScreen'
import AlanScreen from '../screens/AlanScreen'


const Navigation = () => {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
    >
      <RootNavigator />
    </NavigationContainer>
  )
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Timeline' component={TimelineScreen} />
      <Stack.Screen name='Alan' component={AlanScreen} />
    </Stack.Navigator>
  )
}

export default Navigation