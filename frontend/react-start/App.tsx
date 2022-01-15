import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import LoginScreen from './screens/LoginScreen';
import Navigation from './navigation';


const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0077b5',
  },
}

// export default function App() {
//   return (
//     <PaperProvider theme={theme}>
//       <LoginScreen />
//     </PaperProvider>
//   );
// }

export default function App() {
  const isLoadingComplete = useCachedResources()
  // const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <PaperProvider theme={theme}>
          <Navigation />
          <StatusBar />
        </PaperProvider>
      </SafeAreaProvider>
    )
  }
}
