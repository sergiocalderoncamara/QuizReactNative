import React, { useContext } from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Question(props) {


    return (
        <>
            <View style={styles.container}>
                <Text style={styles.question}>Question {props.number + 1}</Text>
                <Text>{props.question}</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
	container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    question: {
        fontSize: 40,
        color: 'tomato',
        fontWeight: 'bold',
    },
})