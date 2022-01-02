import React from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, SafeAreaView } from 'react-native';
import Question from './Question';
import Author from './Author';
import Actionbar from './Actionbar';
import Answer from './Answer';
import Timer from './Timer';


export default function Game(props) {

    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    <View >
                        {(() => {
                            if (!props.quiz.attachment || props.quiz.attachment == null || props.quiz.attachment.url == null) {
                                return (
                                    <Image style={styles.image} source={require('../../../assets/notfound.jpg')} />
                                )
                            } else {
                                return (
                                    <Image style={styles.image} source={{
                                        uri: `${props.quiz.attachment.url}`}} />
                                )
                            }
                        })()}
                    </View>
                    <View >
                        <View >
                            <Question question={props.quiz.question} number={props.number} />
                        </View>
                        <View >
                            <Answer resultado={props.resultado} input={props.input} />
                        </View>
                        <View >
                            <Timer horas={props.horas} minutos={props.minutos} segundos={props.segundos} />
                        </View>
                    </View>
                </View>
                <View style={styles.container}>
                    <View >
                        <Author author={props.quiz.author} />
                    </View>
                    <View >
                        <Actionbar
                            previous={props.previous} previousDisabled={props.previousDisabled}
                            next={props.next} nextDisabled={props.nextDisabled}
                            comprobar={props.comprobar}
                            gameDownload2={props.quizDownload2}
                            pista={props.pista}
                            contadorPistas={props.contadorPistas}
                        />
                    </View>
                </View>
            </ScrollView>
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
