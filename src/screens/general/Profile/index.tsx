import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Pressable } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Header from '../Header';
const EditProfile = () => {
  const [name, setName] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [image, setImage] = useState(null);

  const handleSave = () => {
    // Handle the logic to save the user's profile here
  };

  return (
    <> 
    <Header/>
      <View style={styles.container}>
      <View style={styles.inputContainer}>
    <Image source={require('../../../assets/images/Heartvector.png')} style={styles.icon} />
    <Text style={{fontSize:26,fontWeight:'700',color:'#FE3D3D'}}> A+</Text>
    <Text style={{fontSize:26,fontWeight:'700',color:'#FE3D3D'}}> Blood Group</Text>
      </View>
      <View style={styles.inputContainer}>
    <Image source={require('../../../assets/images/lastbleed.png')} style={styles.icon} />
    <Text style={{fontSize:26,fontWeight:'700',color:'#FE3D3D'}}> </Text>
    <Text style={{fontSize:26,fontWeight:'700',color:'#FE3D3D'}}> Last Bleed</Text>
      </View>
      <View style={styles.inputContainer}>
    <Image source={require('../../../assets/images/locator.png')} style={[styles.icon,{height:50,width:35}]} />
    <Text style={{fontSize:26,fontWeight:'700',color:'#FE3D3D'}}> </Text>
    <Text style={{fontSize:26,fontWeight:'700',color:'#FE3D3D'}}> Location</Text>
      </View>
      <View style={styles.inputContainer}>
    <Image source={require('../../../assets/images/contact.png')} style={styles.icon} />
    <Text style={{fontSize:26,fontWeight:'700',color:'#FE3D3D'}}> </Text>
    <Text style={{fontSize:26,fontWeight:'700',color:'#FE3D3D'}}> Phone Number</Text>
      </View>
      <View style={styles.inputContainer}>
    <Image source={require('../../../assets/images/gender.png')} style={styles.icon} />
    <Text style={{fontSize:26,fontWeight:'700',color:'#FE3D3D'}}> </Text>
    <Text style={{fontSize:26,fontWeight:'700',color:'#FE3D3D'}}> Gender</Text>
      </View>
      <Pressable
                  style={[styles.Signup]}>
                  <Text style={[styles.text, {color: 'white'}]}>Submit </Text>
                </Pressable>
    </View>
    </>
 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  text: {
    alignSelf: 'center',
    lineHeight: 20,
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
    marginBottom: 20,
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
    marginTop:20,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignSelf:'center',
    paddingLeft:20,
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
    width: 320,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: 'white',
    shadowColor: '#FE4444',
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




