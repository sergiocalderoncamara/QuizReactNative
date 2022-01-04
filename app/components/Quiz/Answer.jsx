import React from "react";
import { StyleSheet, View, TextInput } from 'react-native';

export default function Answer(props) {

    const handleInputChange = (event) => {
        props.resultado(event);
    }

    return (
        <>
            <View style={styles.container}>
                <TextInput style={styles.input} value={props.input} placeholder="Write your answer" onChangeText={handleInputChange} />
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