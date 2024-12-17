import React from "react";
import {StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";

const Map = () => {
    return <View style = {styles.container}>
       <Text> I am a Map!</Text>
       <MapView 
       style = {styles.map}
       initialRegion={{
        latitude: 17.4065,
        longitude: 78.4772,
        latitudeDelta: 0.5,
        longitudeDelta: 0.5
       }}
       />
    </View>
};

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    map: {
        flex: 0.5,
        backgroundColor: 'blue'
    }
})

export default Map;