import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Actionbar from './Actionbar';

export default function GameScreen(props) {

  return (
    <>
      <View style={styles.container}>
        <Actionbar navegar={props.navigation.navigate}/>
        <Text>Estás en Home</Text>
        <Image style={styles.image} source={ require ('../../assets/minijuegos.jpg')} /> 
        <StatusBar style="auto" />
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: 400,
    height: 400,
    resizeMode: 'contain'
}
});
