import React, { useEffect, useState } from "react";
import { StyleSheet, View} from "react-native";
import { Button, Text, Input } from "@rneui/base";
import Spacer from "../components/spacer";

const SigninScreen = ({navigation}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])
  
    return <View style = {styles.container}>
        <Spacer>
        <Text h3 marginBottom = {20}> Signup to Tracker</Text>
        </Spacer>

        <Input label = "Username" 
        value= {username} 
        onChangeText={setUsername} 
        autoCapitalize="none"
        autoCorrect = {false}
        />

        <Input 
        label = "Password" 
        value= {password} 
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect = {false}
        secureTextEntry
        />
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