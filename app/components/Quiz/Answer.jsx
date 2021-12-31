import React, { useContext } from "react";
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function Answer(props) {

    const handleInputChange = (event) => {
        props.resultado(event.target.value);
    }

    return (
        <>
            <View className="input-group mb-3">
                <Text>answer</Text>
                <TextInput type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="respuesta" value={props.input} onChange={handleInputChange}/>
            </View>
        </>
    );
}