import React from "react";
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableHighlight } from 'react-native';


export default function Shortcut(props) {

    const numeroRespuesta = props.number;

    const seleccion = () => {
        props.indice(numeroRespuesta);
    }

    return (
        <>
                {(() => {
                    if (props.contestado !== '') {
                        return (
                            <TouchableHighlight style={styles.buttonRespondido} onPress={seleccion}>
                                <Text style={styles.numeros}>
                                    {(numeroRespuesta+1).toString()}
                                </Text>
                            </TouchableHighlight>
                        )
                    } else {
                        return (
                            <TouchableHighlight style={styles.button} onPress={seleccion}>
                                <Text style={styles.numeros}>
                                    {(numeroRespuesta+1).toString()}
                                </Text>
                            </TouchableHighlight>
                        )
                    }
                })()}

        </>
    );
}

const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      backgroundColor: "tomato",
      padding: 10,
    },
    numeros: {
        color: '#ffffff'
    },
    buttonRespondido: {
        alignItems: "center",
        backgroundColor: "#7f69a5",
        padding: 10,
      },
  });