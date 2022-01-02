import React from "react";
import { Text, View, StyleSheet } from "react-native";


export default function Timer(props) {

    return (
        <>
            <View style={styles.container}>
                <Text>{props.horas.toString().padStart(2, '0')}:{props.minutos.toString().padStart(2, '0')}:{props.segundos.toString().padStart(2, '0')}</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
})