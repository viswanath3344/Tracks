import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import * as Location from 'expo-location';
import Map from "../components/Map";

const TrackCreateScreen = () => {
    const [location, setLocation] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(()=> {
      const getCurrentLocation = async () => {
        let permission = await Location.requestForegroundPermissionsAsync();
        console.log(permission);
        if(permission.status !== 'granted') {
         setErrorMessage("Permission to access location denied");
         return
        }

        let location = await Location.getCurrentPositionAsync();
        console.log(location);
        setLocation(location);
      }
      
      getCurrentLocation();

    }, [])

    return <SafeAreaView style = {styles.container}>
        <Text>Track Create Screen </Text>
        {location != null ? <Text>{`${location.coords.latitude}, ${location.coords.longitude}`}</Text> : null }
        <Map />
        {errorMessage != null ? <Text style = {{color:'red', fontSize: 16}}>{errorMessage}</Text> : null}
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default TrackCreateScreen;