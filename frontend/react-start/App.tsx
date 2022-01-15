import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UserForm from './components/LoginForm';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0077b5',
  },
}

const AppNav = createNativeStackNavigator()

function MyStack() {
  return (
    <AppNav.Navigator>
      <AppNav.Screen name="Home" component={Login} />
      <AppNav.Screen name="Notifications" component={Notifications} />
      <AppNav.Screen name="Profile" component={Profile} />
      <AppNav.Screen name="Settings" component={Settings} />
    </AppNav.Navigator>
  );
}

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Text>Please sign into your RedCat account</Text>
        <View style={styles.padding} />
        <UserForm />
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
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
});
