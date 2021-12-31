import React, { useContext } from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faBackward, faForward, faRedo ,faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export default function Actionbar(props) {

    return (
        <>
            <View className="btn-group" role="group" aria-label="Basic example">
                <Button title="Previous" onClick={props.previous} disabled={props.previousDisabled}/>

                <Button title="Next" onClick={props.next} disabled={props.nextDisabled}/>

                <Button title="Reset" onClick={props.gameDownload2}/>

                <Button title="Clue" onClick={props.pista}/>

                <Button title="Submit" onClick={props.comprobar}/>
            </View>
        </>
    );
}