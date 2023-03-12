import { NavigationContainer } from '@react-navigation/native';
import React,{useEffect} from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './src/routes';
import 'react-native-gesture-handler';

const App = () => {

  return (
        <SafeAreaProvider>
          <StatusBar hidden />
          <NavigationContainer  >
            <Routes />
          </NavigationContainer>
        </SafeAreaProvider>
    
  );
};

export default App;
