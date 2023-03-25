import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../../../shared/utils/routes';
import React from 'react';
import Login from '../../../screens/auth/login/login';
import Signup from '../../../screens/auth/signup/signup';
import MainStack from '../mainStack';
import Home from '../../../screens/general/Home';
import Forgot from '../../../screens/auth/login/Forgot';
import Header from '../../../screens/general/Header';
import EditProfile from '../../../screens/general/Profile';
import Notifications from '../../../screens/general/Notification';
import Location from '../../../screens/general/Location';
import Message from '../../../screens/general/Message';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={ROUTES.Login_Screen} component={Login} />
        <Stack.Screen name={ROUTES.Signup_Screen} component={Signup} />
        <Stack.Screen name={ROUTES.MainStack_Screen} component={MainStack} />
        <Stack.Screen name={ROUTES.Home_Screen} component={Home} />
        <Stack.Screen name={ROUTES.Forgot_Screen} component={Forgot} />
        <Stack.Screen name={ROUTES.Header_Screen} component={Header} />
        <Stack.Screen name={ROUTES.EditProfile_Screen} component={EditProfile} />
        <Stack.Screen name={ROUTES.Notifications_Screen} component={Notifications} />
        <Stack.Screen name={ROUTES.Location_Screen} component={Location} />
        <Stack.Screen name={ROUTES.Message_Screen} component={Message} />
      </Stack.Navigator>
    </>
  );
};

export default AuthStack;
