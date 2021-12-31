import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default function Actionbar(props) {
    return (
        <View style={styles.navbar}>
            <TouchableHighlight style={styles.navbar_boton} onPress={() => props.navegar('TicTacToe')}>
                <Text style={styles.navbar_boton_text}>TicTacToe</Text>
            </TouchableHighlight>
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    navbar: {
        marginTop: 0,
    },
    navbar_boton: {
        padding: 15,
        margin: 10,
        backgroundColor: 'tomato',
        color: 'white',
        borderWidth: 3,
        borderColor: 'black',
        fontSize: 25,
        textAlign: 'center'
    },
    navbar_boton_text: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center'
    },
  });