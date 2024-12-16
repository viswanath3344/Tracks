import { Button } from "@rneui/base";
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Context as AuthContext } from "../context/authContext";

const AccountScreen = () => {
    const {signOut} = useContext(AuthContext);
    return <View>
        <Text>Account Screen </Text>
        <Button 
         title={"signout"}
         onPress={() => {signOut()}}
        />
    </View>
}

const styleSheet = StyleSheet.create({});

export default AccountScreen;