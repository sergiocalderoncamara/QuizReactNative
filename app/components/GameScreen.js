import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Actionbar from './Actionbar';

export default function GameScreen(props) {

  return (
    <>
      <View style={styles.container}>
        <ImageBackground style={styles.image} resizeMode='cover' source={require('../../assets/fondo.jpg')}>
          <Actionbar navegar={props.navigation.navigate} />
          <Text style={styles.text}>Welcome to My Games</Text>
          <StatusBar style="auto" />
        </ImageBackground>
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 20,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#00000090"
  }
});
