import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const TrackDetailScreen = ({navigation}) => {
    return <View>
        <Text>Track Create Screen </Text>
        <Button 
        title="<Back"
        onPress={() => { navigation.pop();}
        }/>
    </View>
}

const styleSheet = StyleSheet.create({});

export default TrackDetailScreen;