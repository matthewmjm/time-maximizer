import React from 'react';
import { Image, ImageBackground, Platform, StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import routes from "../navigation/routes";

const WelcomeScreen = ({ navigation }) => {
    return (
        <ImageBackground
            blurRadius={1}
            style={styles.background}
            source={require('../assets/landing.jpg')}
        >
            <View style={styles.logoContainer}>
                <Image 
                    style={styles.logo} 
                    source={require('../assets/icon-logo.jpg')} 
                />
                <AppText style={styles.landingText}>TIME MAXIMIZER</AppText>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton 
                    title="Login"
                    onPress={() => navigation.navigate(routes.LOGIN)} 
                />
                <AppButton 
                    title="Register" 
                    color="quaternary" 
                    onPress={() => navigation.navigate(routes.REGISTER)}
                />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-end',
    },
    buttonsContainer: {
        padding: 20,
        width: '100%',
    },
    logo: {
        height: 100,
        width: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 100,
    },
    landingText: {
        color: colors.primary,
        fontSize: 40,
        fontWeight: 'bold',
    },
})

export default WelcomeScreen;