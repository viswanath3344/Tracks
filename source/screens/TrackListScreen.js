import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const TrackListScreen = ({navigation}) => {
    return <View>
        <Text>Track List Screen </Text>
        <Button 
        title="Track Detail"
        onPress={()=> {
         navigation.navigate("TrackDetail")
        }}
        />
    </View>
}

const styleSheet = StyleSheet.create({});

export default TrackListScreen;