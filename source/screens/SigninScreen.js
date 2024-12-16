import React from "react";
import { StyleSheet, View } from "react-native";
import { useContext } from "react";
import { Context as AuthContext } from "../context/authContext";
import { useEffect } from "react";
import NavLink from "../components/NavLink";
import AuthForm from "../components/AuthForm";


const SignInScreen = ({ navigation }) => {
    const { state, singIn } = useContext(AuthContext);

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return <View style={styles.container}>
        <AuthForm
            headerTitle={"SignIn to Tracker!"}
            onSubmit={singIn}
            submitTitle={"Sign In"}
            errorMessage={state.errorMessage}
        />

         <NavLink title={ "Don't you have an Account? Singup"} routeName={"SignUp"}/>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 250
    }
});

export default SignInScreen;