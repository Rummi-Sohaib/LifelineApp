import { firebase } from '@react-native-firebase/auth';
import React, {useState} from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Pressable,
} from 'react-native';
import { ROUTES } from '../../../shared/utils/routes';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const forgotValidationSchema = yup.object().shape({
  email: yup
  .string()
  .email('Enter your Email Adress').
  required('Email Address is Required'),
});

const Forgot = ({navigation}:any) => {
    const EmailSent = () => {
        Alert.alert(
          'Forgot Email Send',
          'Check your email and change password !',
          [
            { text: 'OK', onPress: () => console.log('OK Pressed') }
          ]
        );
      }
      const NotFound = () => {
        Alert.alert(
          'Account not Found',
          'Please check again this is registered email or not ?',
          [
            { text: 'OK', onPress: () => console.log('OK Pressed') }
          ]
        );
      }
     

  const [email, setEmail] = useState('');
  const  handleResetPassword =()=> {
  firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        EmailSent()
      navigation.navigate(ROUTES.Login_Screen)
    })
    .catch((error) => {
      console.error(error);
      NotFound()
    });
}

  return (
    <Formik  
    validationSchema={forgotValidationSchema}
      initialValues={{email: ''}}
      onSubmit={val => {
        Forgot(val);
      }}>
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.title}>Forgot Password</Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Enter your Email"
          textAlign={'center'}
          value={email}
          placeholderTextColor={'#090909'}
          onChangeText={setEmail}
        />
      </View>
      

      <Pressable
        style={[styles.Signup]}
          onPress={handleResetPassword}>
        <Text style={[styles.button, {color: 'white'}]}>Forgot Password </Text>
      </Pressable>

    </View>
    
    </Formik>
  );
};


export default Forgot;

const styles = StyleSheet.create({
  input: {
    color: 'black',
    height: 56,
    width: 306,
    borderRadius: 15,
    marginBottom: 20,
    backgroundColor: 'white',
    shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  Signup: {
    height: 50,
    width: 200,
    borderRadius: 15,
    backgroundColor: '#E54646',
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
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: 12,
    fontSize: 20,
    fontWeight: 'bold' 
  },
  title: {
    color: '#E54646',
    fontSize: 30,
    marginBottom: 20,
    lineHeight: 43,
    fontWeight: 'bold',
  },
});
