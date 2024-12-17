import { Button } from "@rneui/base";
import React, { useContext } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import { Context as AuthContext } from "../context/authContext";
import Spacer from "../components/spacer";

const AccountScreen = () => {
    const {signOut} = useContext(AuthContext);
    return <SafeAreaView >
        <Text>Account Screen </Text>
        <Spacer>
        <Button 
         title={"Sign out"}
         onPress={signOut}
        />
        </Spacer>
    </SafeAreaView>
}

const styles = StyleSheet.create({
});

export default AccountScreen;