import { Button } from "@rneui/base";
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Context as AuthContext } from "../context/authContext";

const AccountScreen = () => {
    const {signOut} = useContext(AuthContext);
    return <View>
        <Text>Account Screen </Text>
        <Button 
         title={"Sign out"}
         style = {styles.signOut}
         onPress={signOut}
        />
    </View>
}

const styles = StyleSheet.create({
    signOut: {
        marginHorizontal: 16, 
        marginTop: 8
    }
});

export default AccountScreen;