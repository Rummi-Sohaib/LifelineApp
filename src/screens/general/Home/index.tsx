import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import { decode } from "@mapbox/polyline";
import Geolocation from '@react-native-community/geolocation';
import { getDistance, } from 'geolib';

const Home = () => {
  const [coords, setCoords] = useState([]);
  const [Mylocation, setMylocation] = useState({});
  const [Distance, setDistance] = useState();
  

  useEffect(() => {
    myLocation()
    
  }, []);
  const calculateDistance =  (lat:any,long:any) => {
    var dis = getDistance(
      { latitude: Mylocation.latitude, longitude: Mylocation.longitude },
      { latitude: lat, longitude: long }
    );

    setDistance(dis/1000 )
    console.log(dis,"dissssssss")
    console.log( ` ${dis / 1000} KM`);
  };
console.log(Distance,"DIStance-->")

  const myLocation = async () => {
  
      await Geolocation.getCurrentPosition((pos) => {
        const crd = pos.coords;
        setMylocation({
          latitude: crd.latitude,
          longitude: crd.longitude,
        });
      })
  }

  const getDirections = async (lat:any,long:any) => {
    calculateDistance(lat,long)
    Geolocation.getCurrentPosition(info => setMylocation(info));
    console.log(Mylocation,'data')
    const start = `${Mylocation.latitude},${Mylocation.longitude}`
    const end = `${lat},${long}`
    console.log(start,end,'data')
    try {
      const KEY = "AIzaSyACec9CiRbA7D_12bjpyM0Fxt0o5gnMuRI";
      let resp = await fetch(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${start}&destination=${end}&key=${KEY}`
      );
      
      let respJson = await resp.json();
      console.log(respJson.routes,'sdfsdfsfsf')
      let points = decode(respJson.routes[0].overview_polyline.points);
      let coords = points.map((point:any) => {
        return {
          latitude: point[0],
          longitude: point[1]
        };
      });
      setCoords(coords)
    } catch (error) {
      return error;
    }
  };
  
  return (
    <>
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 31.465581712947042,
        longitude: 74.2746399282026,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1
      }}
    >
      {/* finally, render the Polyline component with the coords data */}
      <Marker coordinate={{latitude: 31.465581712947042, longitude: 74.2746399282026}} />
        <Marker onPress={()=>getDirections(31.44713760030181, 74.26821012118077)} coordinate={{latitude:31.44713760030181,
        longitude: 74.26821012118077}} />
      {coords.length > 0 && <Polyline coordinates={coords}
        strokeColor={"red"}
        strokeWidth={7}
        lineJoin='miter'
      />}
    </MapView>
    
    <Text style={{color:'black'}}>{Distance?`${Distance} Km`:'sseeessseeee'}</Text>

  </>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#dddddd',
    margin: 10,
  },
  marker: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#007bff",
    borderColor: "#eee",
    borderRadius: 5,
    elevation: 10,
  },
  text: {
  color: "#fff",   
  },

})

