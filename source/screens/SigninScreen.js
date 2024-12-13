import React, { useEffect } from "react";
import { StyleSheet, View} from "react-native";
import { Button, Text, Input } from "@rneui/base";
import Spacer from "../components/spacer";

const SigninScreen = ({navigation}) => {

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])
  

    return <View style = {styles.container}>
        <Spacer>
        <Text h2> Signup to Tracker</Text>
        </Spacer>

        <Input label = "Username" />
        <Input label = "Password"/>
        <Spacer>
        <Button title={"Signup"}/> 
        </Spacer>
    </View>
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        marginBottom: 250
    }
});

export default SigninScreen;