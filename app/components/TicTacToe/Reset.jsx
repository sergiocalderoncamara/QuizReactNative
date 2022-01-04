import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

export default function Reset(props) {
  function click() {
    props.resetClick();
  }

  return (
    <TouchableHighlight style={styles.button} onPress={click} >
      <Text style={styles.textButton}>Reset</Text>
    </TouchableHighlight>
  );

}

const styles = StyleSheet.create({
  textButton: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center'
  },
  button: {
    padding: 15,
    margin: 10,
    backgroundColor: 'tomato',
    color: 'white',
    borderWidth: 3,
    borderColor: '#ffffffcf',
    fontSize: 25,
    textAlign: 'center'
  }

});