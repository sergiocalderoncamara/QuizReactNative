import React, { useContext } from "react";
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function Author(props) {

    return (
        <>
            <View style={styles.container}>
                {(() => {
                    if (!props.author || props.author == null) {
                        return (
                            <>
                                <Text style={styles.autor}>unknown</Text>
                                <Image style={styles.image} source={require('../../../assets/notfound.jpg')} />
                            </>
                        )
                    } else if (!props.author.username || props.author.username == null) {
                        return (
                            <>
                                <Text style={styles.autor}>unknown</Text>
                                <Image style={styles.image} source={{
                                    uri: `${props.author.photo.url}`
                                }} />
                            </>
                        )
                    } else {
                        return (
                            <>
                                <Text style={styles.autor}>{props.author.username}</Text>
                                <Image style={styles.image} source={{
                                    uri: `${props.author.photo.url}`
                                }} />
                            </>
                        )
                    }
                })()}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginTop: 10,
    },
    image: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        borderRadius: 1000,
    },
    autor: {
        marginRight: 5,
    }
});