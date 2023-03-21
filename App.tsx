import { NavigationContainer } from '@react-navigation/native';
import React,{useEffect} from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './src/routes';
import 'react-native-gesture-handler';
import SplashScreen from "react-native-splash-screen";


const App = () => {

  useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
  }, []);


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
