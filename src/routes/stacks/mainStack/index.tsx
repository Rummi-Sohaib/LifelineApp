import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../../../shared/utils/routes';
import React from 'react';
import Home from '../../../screens/general/Home';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={ROUTES.Home_Screen} component={Home} />
      </Stack.Navigator>
    </>
  );
};

export default MainStack;
