import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { DefaultTheme, configureFonts, Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Logs } from 'expo'

import useAlan from './hooks/useAlan';
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';

Logs.enableExpoCliLogging()

const theme = {
  ...DefaultTheme,
  roundness: 5,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0077b5',
  },
}

export default function App() {
  const isLoadingComplete = useCachedResources()
  // const colorScheme = useColorScheme();

  useAlan();
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
