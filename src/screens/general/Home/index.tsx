import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Button, PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Header from '../Header';

const Home = () => {

  return (
    <>
    <Header/>
    <View style={styles.container}>
      <Text style={{color:'black',fontSize:20}}>Welcome to Lifeline app !</Text>
    </View>

  </>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1, //the container will fill the whole screen.
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: "center",
  },

  
})

