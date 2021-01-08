import React, { useState, useContext } from 'react'
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup'
import Screen from '../components/Screen';
import { ErrorMessage, Form, AppFormField, SubmitButton } from '../components/forms';
import authApi from '../api/auth';
import jwtDecode from 'jwt-decode';
import AuthContext from '../auth/context';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"), 
    password: Yup.string().required().min(4).label("Password"),
})

const LoginScreen = (props) => {
    const authContext = useContext(AuthContext);
    // const authContext = useContext(AuthContext)
    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit = async ({ email, password }) => {
        const result = await authApi.login(email, password);
        if (!result.ok) return setLoginFailed(true);
        setLoginFailed(false);
        const user = jwtDecode(result.data);
        authContext.setUser(user);
        console.log(result.data);
        console.log(user);
    };

    return (
        <Screen style={styles.container}>
            <Image 
                source={require("../assets/background.jpg")}
                style={styles.logo}
            />
            <Form
                initialValues={{ email: '', password: ''}}
                onSubmit={(handleSubmit)}
                validationSchema={validationSchema}
            >
                <ErrorMessage 
                    error="Invalid email and/or password." 
                    visible={loginFailed}
                />
                <AppFormField 
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                <AppFormField 
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry={true}
                    textContentType="password" 
                />
                <SubmitButton title="Login" />
            </Form>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 300,
        height: 300,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    },
});

export default LoginScreen;