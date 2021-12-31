import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';


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
                        <Button title="" onClick={seleccion}/>
                    )
                } else {
                    return (
                        <Button title="" onClick={seleccion}/>
                    )
                }
            })()}
        </>
    );
}