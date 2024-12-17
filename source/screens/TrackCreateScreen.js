import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import Map from "../components/Map";

const TrackCreateScreen = () => {
    return <SafeAreaView style = {styles.container}>
        <Text>Track Create Screen </Text>
        <Map />
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default TrackCreateScreen;