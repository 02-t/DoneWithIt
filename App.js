import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, TouchableNativeFeedback, Text, View, Image, Button, alert, Alert, Platform, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './app/config/Styles.js';
import WelcomeScreen from './app/screens/WelcomeScreen.js';
import ViewImageScreen from './app/screens/ViewImageScreen.js';

export default function App() {


  return (
    /*
    <LinearGradient start={{x: 1, y: 1}} end={{x: 0, y: 0}} colors={['#F6BB66', '#E67EF5']} style={[styles.container]}>

      <View style={[styles.main_view]}>
        <Text>as</Text>
      </View>

    </LinearGradient>
    */

    <ViewImageScreen />
  );
}


