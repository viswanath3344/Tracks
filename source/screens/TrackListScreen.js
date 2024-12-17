import React from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";


const TrackListScreen = ({navigation}) => {
    return <SafeAreaView>
        <Text>Track List Screen </Text>
        <Button 
        title="Track Detail"
        onPress={()=> {
         navigation.navigate("TrackDetail")
        }}
        />
    </SafeAreaView>
}

const styleSheet = StyleSheet.create({});

export default TrackListScreen;