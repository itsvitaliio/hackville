import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { RootStackParamList } from '../types'
import LinkingConfiguration from './LinkingConfiguration'
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'
import CalendarScreen from '../screens/CalendarScreen'
import PlanScreen from '../screens/PlanScreen'
import { NotesScreen } from '../screens/NotesScreen'
import MeditateScreen from '../screens/MeditateScreen'
import MusicScreen from '../screens/MusicScreen'

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
      <Stack.Screen name='Calendar' component={CalendarScreen} />
      <Stack.Screen name='Plan' component={PlanScreen} />
      {/* <Stack.Screen name='Notes' component={NotesScreen} /> */}
      <Stack.Screen name='Meditate' component={MeditateScreen} />
      {/* <Stack.Screen name='Reminders' component={RemindersScreen} /> */}
      <Stack.Screen name='Music' component={MusicScreen} />
      <Stack.Screen name='Alan' component={AlanScreen} />
    </Stack.Navigator>
  )
}

export default Navigation