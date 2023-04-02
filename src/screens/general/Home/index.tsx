import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Pressable } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Header from '../Header';
const Home = () => {


  return (
    <> 
    <Header/>
      <View style={styles.container}>
     <View style={styles.main}>
     <View style={{flexDirection:'column'}}>
      
      <Text style={{fontSize:20,fontWeight:'700',color:'#FE3D3D'}}> Click to Edit</Text>
      <Text style={{fontSize:20,fontWeight:'700',color:'#FE3D3D'}}> Name</Text>
      <Text style={{fontSize:20,fontWeight:'700',color:'#FE3D3D'}}> About</Text>
      <View style={{flexDirection:'row',marginTop:50}}>
    <Image source={require('../../../assets/images/hand.png')}style={[styles.icon,{height:35,width:35}]} />
      <Text style={{fontSize:20,fontWeight:'700',color:'#FE3D3D'}}> Lives Saved</Text>
      </View>
      </View>
    <Image source={require('../../../assets/images/pencil.png')}style={[styles.icon,{height:50,width:35}]} />
   
      </View>





      <View style={styles.inputContainer}>
<View style={{flexDirection:'column'}}>
    <Text style={{fontSize:20,fontWeight:'700',color:'#FE3D3D'}}> Add Urgent Blood Request</Text>
    <Text style={{fontSize:14,fontWeight:'600',color:'#FE3D3D'}}> if there is and emergency</Text>
    </View>
    <Image source={require('../../../assets/images/Blood.png')} style={styles.icon} />
      </View>
      <View style={styles.inputContainer}>
      <View style={{flexDirection:'column'}}>
    <Text style={{fontSize:20,fontWeight:'700',color:'#FE3D3D'}}> Add Blood Request</Text> 
     <Text style={{fontSize:14,fontWeight:'600',color:'#FE3D3D'}}> if you're in need of Blood</Text>
    </View>
    <Image source={require('../../../assets/images/Heart.png')} style={styles.icon} />
      </View>
      <View style={styles.inputContainer}>
      <View style={{flexDirection:'column'}}>
    <Text style={{fontSize:20,fontWeight:'700',color:'#FE3D3D'}}> Available to Donate</Text>
    <Text style={{fontSize:14,fontWeight:'600',color:'#FE3D3D'}}> if you're willing to Donate</Text>
    </View>
    <Image source={require('../../../assets/images/Available.png')} style={[styles.icon,{height:50,width:35}]} />
      </View>
 
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
    width: 40,
    height: 40,
    paddingLeft:50,
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
  main: {
    
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-around',
    color: 'black',
    paddingHorizontal:10,
    height: 255,
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

export default Home;




