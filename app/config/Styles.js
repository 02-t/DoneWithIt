import { Platform, StyleSheet, StatusBar } from 'react-native';
import colors from './colors';


export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },

    main_view: {
      backgroundColor: colors.white,
      flex: 0.5
    },

    bg: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
    },

    logo: {
      width: 100,
      height: 100,
    },
    
    logoContainer: {
      position: 'absolute',
      top: 70,
      alignItems: 'center',
    },

    loginButton: {
      width: '100%',
      height: 70,
      backgroundColor: colors.primary,
    },

    registerButton: {
      width: '100%',
      height: 70,
      backgroundColor: colors.secondary,
    },

    image: {
      width: "100%",
      height: "100%",
    },

    imageContainer: {
      backgroundColor: colors.black,
      flex: 1,
    },

    closeIcon: {
      width: 50,
      height: 50,
      backgroundColor: colors.primary,
      position: "absolute",
      top: 40,
      left: 30,
    },

    deleteIcon: {
      width: 50,
      height: 50,
      backgroundColor: colors.secondary,
      position: "absolute",
      top: 40,
      right: 30,
    },
  });