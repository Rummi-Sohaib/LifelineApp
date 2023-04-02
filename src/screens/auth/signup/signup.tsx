import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
// import auth, { firebase } from '@react-native-firebase/auth';
import {Formik} from 'formik';
import * as yup from 'yup';
import { RegisterSchema } from '../../../shared/utils/validations';
import { ROUTES } from '../../../shared/utils/routes';
import { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Signup = ({navigation}:any) => {
  // const usersCollection = firestore().collection('Users');
  const showAlert = () => {
    Alert.alert(
      'Verification Email sent',
      'Please Check your Email & After verify email you can login !',
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ]
    );
  }
  const ErrorOcurred = () => {
    Alert.alert(
      'Try later',
      'Email already used or internet issue',
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ]
    );
  }

const RegisterUser = (value:any)=>{
  
  firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
  .then((userCredential) => {
    // User registered successfully
    const user = userCredential.user;
    firestore()
    .collection('users')
    .add({
      name: value.name,
      email: value.email,
      Blood_Group :value.Blood,
    })
    // Send email verification to the user
    user.sendEmailVerification().then(() => {
      navigation.navigate(ROUTES.Login_Screen);
      showAlert()
     
    }).catch((error) => {
      // Error occurred while sending email verification
      console.error(error);
    });
  })
  .catch((error) => {
    // Error occurred while registering user
    ErrorOcurred()
  });
}
  return (
    <Formik
      validationSchema={RegisterSchema}
      initialValues={{email: '', password: '',name:'',Blood:'',ConfirmPassword:''}}
      onSubmit={ (val) => {
        RegisterUser(val);

      }}>
      {({handleChange, handleBlur, handleSubmit, values, errors, isValid}) => (
        <>
          <ScrollView style={styles.container}>
            <View style={styles.viewmain}>
              <View>
                <Text style={styles.heading}>Create an Account</Text>
              </View>
            </View>
            {/* lOGIN NAME & EMAIL */}

            <View style={{padding: 26}}>
              <View>
                <Text style={styles.title}>Name</Text>
                <TextInput style={styles.input} placeholder="Name" placeholderTextColor={'gray'}
                onChangeText={handleChange('name')} 
                />
               
                {errors.name && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.name}
                    </Text>
                  )}
              </View>

              <View>
                <Text style={styles.title}>Email</Text>
                <TextInput style={styles.input} placeholder="Enter Email"  placeholderTextColor={'gray'}
                  onChangeText={handleChange('email')}
                  />
                {errors.email && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.email}
                    </Text>
                  )}
              </View>
              <View>
                <Text style={[styles.title,{color:'red'}]}>Blood Group</Text>
                <TextInput style={styles.input} placeholder="Blood Group"  placeholderTextColor={'gray'}
                  onChangeText={handleChange('Blood')}
                  autoCapitalize='characters'
                  maxLength={3}
                  />
                {errors.Blood && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.Blood}
                    </Text>
                  )}
              </View>
              <View>
                <Text style={styles.title}>Password</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor={'gray'}
                  secureTextEntry={true}
                  onChangeText={handleChange('password')}
                />
                  {errors.password && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.password}
                    </Text>
                  )}
              </View>

              <View>
                <Text style={styles.title}>Retype-Password</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Retype-Password"
                  placeholderTextColor={'gray'}
                  secureTextEntry={true}
                  onChangeText={handleChange('ConfirmPassword')}
                />
                    {errors.ConfirmPassword && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.ConfirmPassword}
                    </Text>
                  )}
              </View>
              {/* lOGIN button */}
              <View>
                <TouchableOpacity style={styles.touch}
                onPress={handleSubmit}
                >
                  <Text style={styles.submit}>Register </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </>
      )}
    </Formik>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  viewmain: {
    backgroundColor: 'white',
    marginTop: 20,
    alignItems: 'center',
  },
  heading: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 40,
    marginBottom: 10,
    color: 'black',
  },
  title: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 18,
    paddingTop: 15,
    color:'black',
    lineHeight: 27,
    alignSelf: 'flex-start',
  },
  input: {
    flexDirection: 'row',
    backgroundColor: '#EEF2F5',
    color:'black',
    borderRadius: 15,
    marginTop: 10,
    paddingHorizontal: 30,
  },
  submit: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 50,
    color: '#EEF2F5',
    borderRadius: 15,
  },
  touch: {
    backgroundColor: '#090909',
    borderRadius: 15,
    marginTop: 30,
  },
});
function alert(arg0: string) {
  throw new Error('Function not implemented.');
}

