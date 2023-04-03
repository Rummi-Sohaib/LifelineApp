import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Button, PermissionsAndroid, ActivityIndicator} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Header from '../Header';
import MapView, { Marker, Polyline } from "react-native-maps";
import { decode } from "@mapbox/polyline";
import { getDistance, } from 'geolib';


// Function to get permission for location
const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Geolocation Permission',
        message: 'Can we access your location?',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    console.log('granted', granted);
    if (granted === 'granted') {
      console.log('You can use Geolocation');
      return true;
    } else {
      console.log('You cannot use Geolocation');
      return false;
    }
  } catch (err) {
    return false;
  }
};
const Location = () => {

  // state to hold location
  const [location, setLocation] = useState({});
  useEffect(()=>{
    getLocation()
  },[])
  // function to check permissions and get Location
  const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      console.log('res is:', res);
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            console.log(position);
            setLocation(position.coords);
          },
          error => {
            // See error code charts below.
            console.log(error.code, error.message);
            setLocation({});
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    });
    console.log(location);
  };
  return (
    <>
    <Header/>
    <View style={styles.container}>
    {location.latitude ? <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1
      }}
    >
  <Marker coordinate={{latitude: location.latitude,
        longitude: location.longitude}} />
    </MapView>: <View style={{ flex: 1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator color={'red'} size='large'/>
      </View>}
  
      {/* <View
        style={{marginTop: 10, padding: 10, borderRadius: 10, width: '40%'}}>
        <Button title="Get Location" onPress={()=>getLocation()} />
      </View>
      <Text style={{color:'black',fontSize:15,fontWeight:'bold'}}>Latitude  : {location ? location.latitude : null}</Text>
      <Text style={{color:'black',fontSize:15,fontWeight:'bold'}}>Longitude  : {location ? location.longitude : null}</Text> */}

    </View>

  </>
  )
}

export default Location;

const styles = StyleSheet.create({
  container: {
    flex: 1, //the container will fill the whole screen.
    // justifyContent: 'center',
    backgroundColor: '#fff',
    // alignItems: "center",
  },

  
})

