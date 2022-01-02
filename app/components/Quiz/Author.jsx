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
                            <Image style={styles.image} source={ require ('../../../assets/notfound.jpg')} />
                            </>
                        )
                    } else if (!props.author.username || props.author.username == null) {
                        return (
                            <>
                            <Text>unknown</Text>
                            <Image style={styles.image} source={{
                                        uri: `${props.author.photo.url}`
                                        }} />
                            </>
                        )
                    } else {
                        return (
                            <>
                            <Text>{props.author.username}</Text>
                            <Image style={styles.image} source={{
                                        uri: `${props.author.photo.url}`
                                        }} />
                            </>
                        )
                    }
                })()}        
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    }
});