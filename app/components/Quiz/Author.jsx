import React, {useContext} from "react";
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function Author (props) {

    return (
        <>
        {(() => {
                    if (!props.author || props.author == null) {
                        return(
                            <>
                            <Text>unknown</Text>
                            <Image source={ require ('../../../assets/notfound.jpg')} />
                            </>
                        )
                    } else if (!props.author.username || props.author.username == null) {
                        return (
                            <>
                            <Text>unknown</Text>
                            <Image source={props.author.photo.url} />
                            </>
                        )
                    } else {
                        return (
                            <>
                            <Text>{props.author.username}</Text>
                            <Image source={props.author.photo.url} />
                            </>
                        )
                    }
                })()}        
        </>
    );
}