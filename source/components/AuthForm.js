import React from "react";
import { useState } from "react";
import { Button, Text, Input } from "@rneui/base";
import Spacer from "./spacer";
import { View } from "react-native";

const AuthForm = ({ headerTitle, submitTitle, errorMessage, onSubmit }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View>
            <Spacer>
                <Text h3 marginBottom={20}> {headerTitle}</Text>
            </Spacer>

            <Input label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />

            <Input
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
            />

            {errorMessage ? <Text style={{ color: 'red', marginHorizontal: 16, fontSize: 18 }}>{errorMessage}</Text> : null}

            <Spacer>
                <Button title={submitTitle}
                    onPress={() => onSubmit(email, password)}
                />
            </Spacer>
        </ View>
    )
}

export default AuthForm;