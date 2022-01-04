import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faBackward, faForward, faRedo ,faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export default function Actionbar(props) {

    return (
        <View>
            <View style={styles.fixToText}>
                <TouchableOpacity style={styles.button} onPress={props.previous} disabled={props.previousDisabled}>
                    <Text style={styles.texto}>
                        Previous
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={props.next} disabled={props.nextDisabled}>
                    <Text style={styles.texto}>
                        Next
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={props.gameDownload2}>
                    <Text style={styles.texto}>
                        Reset
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={props.pista}>
                    <Text style={styles.texto}>
                        Clue: {props.contadorPistas}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={props.comprobar}>
                    <Text style={styles.texto}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.fixToText}>
                <TouchableOpacity style={styles.button} onPress={props.save}>
                    <Text style={styles.texto}>
                        Save
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={props.load}>
                    <Text style={styles.texto}>
                        Load
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={props.remove}>
                    <Text style={styles.texto}>
                        Remove
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    fixToText: {
        flexDirection: 'row',
        justifyContent: "center",//'space-evenly',
        marginTop: 10,
        backgroundColor: 'white',
    },
    button: {
        alignItems: "center",
        backgroundColor: "tomato",
        padding: 10,
        borderWidth: 2,
        borderColor: '#ffffff',
      },
      texto: {
          color: '#ffffff'
      },
})