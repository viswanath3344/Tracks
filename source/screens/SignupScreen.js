import React, { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Context as AuthContext } from "../context/authContext";
import NavLink from "../components/NavLink";
import AuthForm from "../components/AuthForm";

const SignUpScreen = ({ navigation }) => {
    const { state, signUp } = useContext(AuthContext);

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return <View style={styles.container}>
        <AuthForm
            headerTitle={"Singup to Tracker!"}
            onSubmit={signUp}
            submitTitle={"Sign Up"}
            errorMessage={state.errorMessage}
        />

        <NavLink title={ "Do you have an Account? SingIn"} routeName={"SignIn"}/>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 250
    },
    link: {
        color: 'blue',
        fontSize: 18,
        marginLeft: 8,
        marginTop: 8
    }
});

export default SignUpScreen;