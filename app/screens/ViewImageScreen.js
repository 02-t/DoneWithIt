import React from 'react';
import { Image, View } from 'react-native';
import styles from '../config/Styles.js';

function ViewImageScreen(props) {
    return (
        <View style={styles.imageContainer}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image resizeMode='contain' style={styles.image} source={require("../assets/chair.jpg")}/>
        </View>
    );
}

export default ViewImageScreen;