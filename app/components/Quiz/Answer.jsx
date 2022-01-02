import React, { useContext } from "react";
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function Answer(props) {

    const handleInputChange = (event) => {
        props.resultado(event.target.value);
    }

    return (
        <>
            <View style={styles.container}>
                <Text>Answer</Text>
                <TextInput style={styles.input} value={props.input} placeholder="Write your answer" onChange={handleInputChange} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});