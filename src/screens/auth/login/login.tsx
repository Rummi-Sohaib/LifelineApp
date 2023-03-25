import React, {Component, useState} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Alert,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {ROUTES} from '../../../shared/utils/routes';
import {ScrollView} from 'react-native-gesture-handler';
import auth, { firebase } from '@react-native-firebase/auth';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

const Login = ({navigation}: any) => {
  const showAlert = () => {
    Alert.alert(
      'Email Not Verified',
      'Please Check your Email & verify your email Thanks !',
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ]
    );
  }
  
  const NoRecord = () => {
    Alert.alert(
      'Account not Found',
      'Please Create an account !',
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ]
    );
  }
 
  const UserLogin = (value:any) => {
    firebase.auth().signInWithEmailAndPassword(value.email, value.password)
    .then((userCredential) => {
      // User logged in successfully
      const user = userCredential.user;
      if (user.emailVerified) {
        // Email is verified, log in the user
        navigation.navigate(ROUTES.Home_Screen);
      } else {
        // Email is not verified, show an error message
       showAlert()
      }
    })
    .catch((error) => {
      // Error occurred while logging in user
      NoRecord()
    });
  
    };
  

  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={{email: '', password: ''}}
      onSubmit={val => {
        UserLogin(val);
      }}>
      {({handleChange, handleSubmit, values, errors, isValid}) => (
        <>
          <ScrollView>
            <View style={styles.mainContainer}>
              <Text style={styles.title}>welcome to</Text>
              <Text style={styles.recordbook}>lifeline</Text>

              <View style={{paddingTop: 60}}>
                <View>
                  {errors.email && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.email}
                    </Text>
                  )}
                  <TextInput
                    style={styles.input}
                    placeholder="Email"
                    textAlign={'left'}
                    placeholderTextColor={'#090909'}
                    value={values.email}
                    onChangeText={handleChange('email')}
                  />
                </View>
                <View>
                  {errors.password && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.password}
                    </Text>
                  )}
                  <TextInput
                    style={styles.input}
                    textAlign={'left'}
                    placeholder="Password"
                    placeholderTextColor={'#090909'}
                    secureTextEntry={true}
                    value={values.password}
                    onChangeText={handleChange('password')}
                  />
                </View>

                <Pressable
                  style={[styles.Signup]}
                  // onPress={navigation.navigate(ROUTES.Home_Screen)}
                  onPress={handleSubmit}
                  disabled={!isValid}>
                  <Text style={[styles.text, {color: 'white'}]}>Sign in </Text>
                </Pressable>
                <TouchableOpacity onPress={()=>navigation.navigate(ROUTES.Forgot_Screen)}>
                  <Text style={[styles.text, { color: '#9E1616',fontSize:15,marginTop:-10}]}>forgot Password ? </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.register]}
                  onPress={() => navigation.navigate(ROUTES.Signup_Screen)}>
                  <Text
                    style={[styles.reg, {color: 'black', fontWeight: 'bold'}]}>
                    Register ?
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </>
      )}
    </Formik>
  );
};

export default Login;
const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 43,
    paddingTop: '20%',
    lineHeight: 43,
    fontWeight: 'bold',
  },
  txt: {
    alignSelf: 'center',
    color: '#4a4a4a',
  },
  Signup: {
    height: 56,
    width: 306,
    borderRadius: 28,
    backgroundColor: 'black',
    opacity: 1,
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  register: {
    alignSelf: 'center',
    width: 100,
    borderRadius: 28,
    shadowColor: 'white',
  },
  recordbook: {
    color: '#9E1616',
    fontSize: 43,
    paddingTop: '10%',
    lineHeight: 43,
    fontWeight: 'bold',
  },
  text: {
    alignSelf: 'center',
    lineHeight: 20,
    fontSize: 20,
    color: 'black',
    paddingTop: 21,
  },
  reg: {
    alignSelf: 'center',
    lineHeight: 20,
    fontSize: 19,
    color: 'black',
    paddingTop: 11,
    textDecorationLine: 'underline',
  },
  txtInput: {
    alignSelf: 'center',
    lineHeight: 20,

    fontSize: 20,
    color: 'black',
    paddingTop: 21,
  },
  input: {
    color: 'black',
    height: 56,
    width: 306,
    borderRadius: 28,
    marginBottom: 20,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    alignSelf: 'center',
    paddingLeft: 20,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  txtt: {
    alignSelf: 'center',
    fontSize: 11,
    color: 'black',
    paddingTop: 12,
    paddingBottom: 12,
  },
  img: {width: 80, height: 80, alignItems: 'center', marginTop: '4%'},
});
