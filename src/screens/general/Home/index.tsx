import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";


const Home = () => {
  return (
    <>
    <View style={styles.container}>
       <Text style={{color:'black',fontSize:20}}>Welcome To Lifeline</Text>
    </View>


  </>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1, //the container will fill the whole screen.
    justifyContent: 'center',
    alignItems: "center",
  },

  
})

