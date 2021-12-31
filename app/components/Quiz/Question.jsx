import React, {useContext} from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Question (props) {


    return (
        <>
            <Text className="display-3">question {props.number + 1}</Text>
            <Text>{props.question}</Text>
        </>
    );
}