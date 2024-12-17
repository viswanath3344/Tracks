import React from "react";
import {StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import { Polyline } from "react-native-maps";

const Map = () => {
   const coordinates=[
        {latitude: 37.8025259, longitude: -122.4351431},
        {latitude: 37.7896386, longitude: -122.421646},
        {latitude: 37.7665248, longitude: -122.4161628},
        {latitude: 37.7734153, longitude: -122.4577787},
        {latitude: 37.7948605, longitude: -122.4596065},
        {latitude: 37.8025259, longitude: -122.4351431},
      ]

    return <View style = {styles.container}>
       <Text> I am a Map!</Text>
       <MapView
       style = {styles.map}
       initialRegion={{
        latitude: 37.8025259,
        longitude: -122.4351431,
        latitudeDelta: 0.05, 
        longitudeDelta: 0.05
       }}
       >
        <Polyline coordinates={coordinates} 
       // strokeColor="red"
        strokeColors={[
            '#7F0000',
            '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
            '#B24112',
            '#E5845C',
            '#238C23',
            '#7F0000',
          ]}
        strokeWidth={6}
        />
       </MapView>
       
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