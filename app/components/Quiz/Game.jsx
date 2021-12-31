import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Question from './Question';
import Author from './Author';
import Actionbar from './Actionbar';
import Answer from './Answer';
import Timer from './Timer';


export default function Game(props) {


    return (
        <>
            <View className='row mt-5'>
                <View className='col-6'>
                    {(() => {
                        if (!props.quiz.attachment || props.quiz.attachment == null) {
                            return (
                                <Image source="notfound.jpg" />
                            )
                        } else {
                            return (
                                <Image source={props.quiz.attachment.url} />
                            )
                        }
                    })()}
                </View>
                <View className='col-6'>
                    <View className='col-12 text-center my-3'>
                        <Question question={props.quiz.question} number={props.number} />
                    </View>
                    <View className='col-12 text-center'>
                        <Answer resultado={props.resultado} input={props.input} />
                    </View>
                    <View className='col-12 text-center'>
                        <Timer horas={props.horas} minutos={props.minutos} segundos={props.segundos}/>
                    </View> 
                </View>
            </View>
            <View className='row mt-1'>
                <View className='col-6'>
                    <Author author={props.quiz.author} />
                </View>
                <View className='col-6 text-center'>
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
        </>

    );
}
