import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import styles from '../config/Styles.js';

function WelcomeScreen(props) {
    return (
        <ImageBackground style={styles.bg} source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <Text>Sell What you Don't Need!</Text>
            </View>

            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

export default WelcomeScreen;