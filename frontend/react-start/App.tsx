import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { DefaultTheme, configureFonts, Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';

const theme = {
  ...DefaultTheme,
  roundness: 5,
  // font: 'lato',
  colors: {
    ...DefaultTheme.colors,
    primary: '#0077b5',
  },
}

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
