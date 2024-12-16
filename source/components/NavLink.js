import React from "react";

import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default ({ title, routeName }) => {
    const navigation = useNavigation();

    return <TouchableOpacity
        onPress={() => navigation.navigate(routeName)}
        >
        <Text style={styles.link}>{title}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    link: {
        fontSize: 18,
        marginLeft: 8,
        marginTop: 8,
        color: 'blue'
    }
})