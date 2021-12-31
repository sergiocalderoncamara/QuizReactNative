import React from "react";
import { Text } from "react-native";


export default function Timer(props) {

    return (
        <>
            <Text>{props.horas.toString().padStart(2, '0')}:{props.minutos.toString().padStart(2, '0')}:{props.segundos.toString().padStart(2, '0')}</Text>
        </>
    );
}