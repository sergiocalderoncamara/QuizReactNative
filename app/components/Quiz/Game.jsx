import React from 'react';
import Question from './Question';
import Author from './Author';
import Actionbar from './Actionbar';
import Answer from './Answer';
import Timer from './Timer';


export default function Game(props) {


    return (
        <>
            <div className='row mt-5'>
                <div className='col-6'>
                    {(() => {
                        if (!props.quiz.attachment || props.quiz.attachment == null) {
                            return (
                                <img src="notfound.jpg" className="img-thumbnail imagen" alt="question image" />
                            )
                        } else {
                            return (
                                <img src={props.quiz.attachment.url} className="img-thumbnail imagen" alt="question image" />
                            )
                        }
                    })()}
                </div>
                <div className='col-6'>
                    <div className='col-12 text-center my-3'>
                        <Question question={props.quiz.question} number={props.number} />
                    </div>
                    <div className='col-12 text-center'>
                        <Answer resultado={props.resultado} input={props.input} />
                    </div>
                    <div className='col-12 text-center'>
                        <Timer horas={props.horas} minutos={props.minutos} segundos={props.segundos}/>
                    </div> 
                </div>
            </div>
            <div className='row mt-1'>
                <div className='col-6'>
                    <Author author={props.quiz.author} />
                </div>
                <div className='col-6 text-center'>
                    <Actionbar
                        previous={props.previous} previousDisabled={props.previousDisabled}
                        next={props.next} nextDisabled={props.nextDisabled}
                        comprobar={props.comprobar}
                        gameDownload2={props.quizDownload2}
                        pista={props.pista}
                        contadorPistas={props.contadorPistas}
                    />
                </div>
            </div>
        </>

    );
}
