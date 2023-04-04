import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Pressable } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Header from '../Header';
import { Formik } from 'formik';
import { firebase } from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';
import { PrfileSchema } from '../../../shared/utils/validations';
import firestore from '@react-native-firebase/firestore';
const EditProfile = () => {
  const [name, setName] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [image, setImage] = useState(null);
  const user = auth()

  console.log(user._user.uid,'user')
  const [data , setData] = useState({BG: '', LB: '',Loc:'',PH:'',GN:''})
  useEffect(()=>{
   gertValues()
  },[])

  const gertValues = async ()=>{
    await firestore().collection('Profile').doc(user._user.uid).get().then(r=> {
      let result = r.data()
      let obj = {BG: result.Blood_Group ?? '', LB: result.Last_Bleed ?? '',Loc: result.Location?? '',PH:result.Phone_Number?? '',GN:result.Gender??''}
      setData(obj)
      })
  }
     const initialValues = data

  const RegisterUser = (value: any) => {
 
    

        // Wait for email verification to be sent before adding user data to Firestore
         firestore().collection('Profile').doc(user._user.uid).set({
          Blood_Group: value.BG,
          Last_Bleed: value.LB,
          Location: value.Loc,
          Phone_Number: value.PH,
          Gender: value.GN,

       
      })
  };

  return (
    <> 
    
    <Header/>
    <Formik
      validationSchema={PrfileSchema}
      initialValues={initialValues}
      onSubmit={ (val) => {
        RegisterUser(val);

      }}>
      {({handleChange, handleBlur, handleSubmit, values, errors, isValid}) => (
        console.log(values,'values'),
      <View style={styles.container}>
         {errors.BG && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.BG}
                    </Text>
                  )}
      <View style={styles.inputContainer}>
    <Image source={require('../../../assets/images/Heartvector.png')} style={styles.icon} />
    <TextInput style={{fontSize:15,fontWeight:'700',color:'#FE3D3D'}} placeholder='A+' placeholderTextColor={'red'} value={values.BG} maxLength={3}
       onChangeText={handleChange('BG')} 
    />
    {/* <Text style={{fontSize:18,fontWeight:'700',color:'#FE3D3D'}}> A+</Text> */}
    <Text style={{fontSize:18,fontWeight:'700',color:'#FE3D3D'}}> Blood Group</Text>
   
      </View>
      {errors.LB && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.LB}
                    </Text>
                  )}
      <View style={styles.inputContainer}>
    <Image source={require('../../../assets/images/lastbleed.png')} style={styles.icon} />
    <TextInput style={{fontSize:15,fontWeight:'700',color:'#FE3D3D'}} placeholder='mm/yy' placeholderTextColor={'red'} maxLength={5}
       onChangeText={handleChange('LB')} inputMode='numeric' />
    <Text style={{fontSize:18,fontWeight:'700',color:'#FE3D3D'}}> Last Bleed</Text>
 
      </View>
      {errors.Loc && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.Loc}
                    </Text>
                  )}
      <View style={styles.inputContainer}>
    <Image source={require('../../../assets/images/locator.png')} style={[styles.icon,{height:50,width:35}]} />
    <TextInput style={{fontSize:15,fontWeight:'700',color:'#FE3D3D'}} placeholder='City' placeholderTextColor={'red'} maxLength={10}
       onChangeText={handleChange('Loc')} />
    <Text style={{fontSize:18,fontWeight:'700',color:'#FE3D3D'}}> Location</Text>
   
      </View>
      {errors.PH && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.PH}
                    </Text>
                  )}
      <View style={styles.inputContainer}>
    <Image source={require('../../../assets/images/contact.png')} style={styles.icon} />
    <TextInput style={{fontSize:15,fontWeight:'700',color:'#FE3D3D'}} placeholder='+123456789' placeholderTextColor={'red'} maxLength={5}
       onChangeText={handleChange('PH')} inputMode='numeric'/>
    <Text style={{fontSize:18,fontWeight:'700',color:'#FE3D3D'}} > Phone Number</Text>
   
      </View>
      {errors.GN && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.GN}
                    </Text>
                  )}
      <View style={styles.inputContainer}>
    <Image source={require('../../../assets/images/gender.png')} style={styles.icon} />
    <TextInput style={{fontSize:15,fontWeight:'700',color:'#FE3D3D'}} placeholder='Gender' placeholderTextColor={'red'} maxLength={5}
       onChangeText={handleChange('GN')} />
    <Text style={{fontSize:18,fontWeight:'700',color:'#FE3D3D'}}> Gender</Text>
  
      </View>
      <Pressable onPress={handleSubmit}
                  style={[styles.Signup]}>
                  <Text style={[styles.text, {color: 'white'}]}>Submit </Text>
                </Pressable>
    </View>
        )}
        </Formik>
    </>
 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 18,
    alignItems: 'center',
  },
  text: {
    alignSelf: 'center',
    lineHeight: 18,
    fontSize: 36,
    color: 'black',
    paddingTop: 21,
  },
  icon: {
    width: 50,
    height: 50,
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 75,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  Signup: {
    height: 72,
    width: 270,
    borderRadius: 28,
    backgroundColor: '#FE3D3D',
    opacity: 1,
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    marginTop:18,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignSelf:'center',
    paddingLeft:18,
    justifyContent:'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  
  uploadText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  
  inputContainer: {
    alignItems:'center',
    flexDirection:'row',
   justifyContent:'space-between',
    color: 'black',
    paddingHorizontal:10,
    height: 56,
    width: 318,
    borderRadius: 10,
    marginBottom: 18,
    backgroundColor: 'white',
    shadowColor: '#FE4444',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    alignSelf: 'center',
    paddingLeft: 18,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007aff',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default EditProfile;

// import React, { useState, useEffect } from 'react';
// import { View, Text } from 'react-native';
// import firestore from '@react-native-firebase/firestore';

// const EditProfile = () => {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const user = firestore().collection('users').doc('userId');
//       const doc = await user.get();

//       if (!doc.exists) {
//         console.log('No such document!');
//       } else {
//         setUserData(doc.data());
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <View>
      
//       <Text>Name: {userData?.name}</Text>
//       <Text>Email: {userData?.email}</Text>
//       <Text>Blood Group: {userData?.Blood_Group}</Text>
//     </View>
//   );
// };

// export default EditProfile;




