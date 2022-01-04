import React, { useState, useContext, useEffect } from 'react';
import { Alert, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Game from './Game';
import Shortcut from './Shortcut';
import { getAPI } from "../../../api";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { quizzesInitial } from '../../../assets/mock-data';

const horasTimer = 0;
const minutosTimer = 10;
const segundosTimer = 0;

export default function Quiz(props) {

	const [score, setScore] = useState(0);
	const [finished, setFinished] = useState(false);
	const [currentQuiz, setCurrentQuiz] = useState(0);
	const [previousDisabled, setPreviousDisabled] = useState(true);
	const [nextDisabled, setNextDisabled] = useState(false);
	const [answers, setAnswers] = useState(['', '', '', '', '', '', '', '', '', '']);
	const [inputValue, setInputValue] = useState("");
	const [contadorPistas, setContadorPistas] = useState(3);
	const [horas, setHoras] = useState(horasTimer);
	const [minutos, setMinutos] = useState(minutosTimer);
	const [segundos, setSegundos] = useState(segundosTimer);
	const [quizzes, setQuizzes] = useState(quizzesInitial);

	const download = async () => {
		let downloadedQuizzes = await getAPI();
		setQuizzes(downloadedQuizzes);
	}

	useEffect(() => {
		async function fetchData() {
			try {
				await download();
			} catch (error) {
				alert("error");
			}
		}
		fetchData();
	}, []);

	const tictac = () => {
		if (horas === 0 && minutos === 0 && segundos === 0)
			comprobar();
		else if (minutos === 0 && segundos === 0) {
			setHoras(horas - 1);
			setMinutos(59);
			setSegundos(59);
		} else if (segundos === 0) {
			setMinutos(minutos - 1);
			setSegundos(59);
		} else {
			setSegundos(segundos - 1);
		}
	}

	useEffect(() => {
		if (finished === false) {
			const timerId = setInterval(() => tictac(), 1000);
			return () => clearInterval(timerId);
		} else {
			return
		}
	});

	const previous = () => {
		let id = currentQuiz;
		id--;
		setCurrentQuiz(id);
		control(id);
		setInputValue(answers[id]);
	}

	const next = () => {
		let id = currentQuiz;
		id++;
		setCurrentQuiz(id);
		control(id);
		setInputValue(answers[id]);
	}

	const indice = (indice) => {
		setCurrentQuiz(indice);
		control(indice);
		setInputValue(answers[indice]);
	}

	const control = (indice) => {
		if (indice <= 0) {
			setPreviousDisabled(true);
			setNextDisabled(false);
		} else if (indice >= quizzes.length - 1) {
			setPreviousDisabled(false);
			setNextDisabled(true);
		} else {
			setPreviousDisabled(false);
			setNextDisabled(false);
		}
	}

	const recogerAnswer = (resultado) => {
		let copia = answers;
		copia.splice(currentQuiz, 1, resultado);
		setAnswers(copia);
		setInputValue(resultado);
	}

	const comprobar = () => {
		let c = 0;
		quizzes.forEach((element, index) => {
			if (element.answer.toLowerCase() === answers[index].toLowerCase().trim()) {
				c++;
			}
		});
		setScore(c);
		setFinished(true);
		setAnswers(['', '', '', '', '', '', '', '', '', ''])
	}

	const quizDownload2 = () => {
		download();
		control(0);
		setFinished(false);
		setScore(0);
		setInputValue("");
		setAnswers(['', '', '', '', '', '', '', '', '', '']);
		setCurrentQuiz(0);
		setContadorPistas(3);
		setHoras(horasTimer);
		setMinutos(minutosTimer);
		setSegundos(segundosTimer);
	}

	const pista = () => {
		if (quizzes[currentQuiz].answer.toLowerCase() !== answers[currentQuiz].toLowerCase().trim()) {
			let copia = contadorPistas;
			if (copia > 0) {
				setInputValue(quizzes[currentQuiz].answer);
				recogerAnswer(quizzes[currentQuiz].answer);
				copia--;
			}
			setContadorPistas(copia);
		}
	}


	const save = async () => {
		try {
			var quizzesStringified = JSON.stringify(quizzes);
			await AsyncStorage.setItem('@P5_2021_IWEB:quiz', quizzesStringified);
			console.log('Saving succesfully');

			alert(
				"¡Quizzes guardados con éxito!",
				[
					{ text: 'OK', onPress: () => console.log('OK pressed') },
				],
				{ cancelable: false }
			);
		} catch (error) {
			console.log('Error saving data');
		}
	}

	const load = async () => {
		try {
			var JSONquizzesStoraged = await AsyncStorage.getItem('@P5_2021_IWEB:quiz');
			if (JSONquizzesStoraged !== null) {
				var quizzesStoraged = JSON.parse(JSONquizzesStoraged);
				setQuizzes(quizzesStoraged);
				console.log('Loading succesfully');

				control(0);
				setFinished(false);
				setScore(0);
				setInputValue("");
				setAnswers(['', '', '', '', '', '', '', '', '', '']);
				setCurrentQuiz(0);
				setContadorPistas(3);
				setHoras(horasTimer);
				setMinutos(minutosTimer);
				setSegundos(segundosTimer);

				alert(
					"¡Quizzes cargados con éxito!",
					[
						{ text: 'OK', onPress: () => console.log('OK pressed') },
					],
					{ cancelable: false }
				);
			} else {
				alert(
					"Fallo al cargar los quizzes. No hay quizzes guardados.",
					[
						{ text: 'OK', onPress: () => console.log('OK pressed') },
					],
					{ cancelable: false }
				);
			}
		} catch (error) {
			console.log('Error loading data');
		}
	}

	const remove = async () => {
		try {
			await AsyncStorage.clear()
			console.log('Removing succesfully');
			alert(
				"¡Quizzes borrados con éxito!",
				[
					{ text: 'OK', onPress: () => console.log('OK pressed') },
				],
				{ cancelable: false }
			);
		} catch (error) {
			console.log('Error removing data');
		}
	}

	return (
		<View style={styles.container}>
			{(() => {
				if (finished) {
					return (
						<>
							<Text style={styles.score}>Score: {score}</Text>
							<View>
								<TouchableHighlight style={styles.button} onPress={quizDownload2}>
									<Text style={styles.textoBoton}>
										Reset
									</Text>
								</TouchableHighlight>
							</View>
						</>
					)
				} else {
					return (
						<>
							<View >
								<View style={styles.fixToText}>
									{quizzes.map((quiz, index) =>
										<Shortcut key={index} number={index} indice={indice} contestado={answers[index]} />
									)}
								</View>
							</View>
							<Game
								quiz={quizzes[currentQuiz]}
								number={currentQuiz}
								previous={previous} previousDisabled={previousDisabled}
								next={next} nextDisabled={nextDisabled}
								resultado={recogerAnswer}
								input={inputValue}
								comprobar={comprobar}
								quizDownload2={quizDownload2}
								pista={pista}
								contadorPistas={contadorPistas}
								horas={horas} minutos={minutos} segundos={segundos}
								save={save}
								load={load}
								remove={remove} />

						</>
					)
				}
			})()}

		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
	},
	fixToText: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		marginTop: 10,
		backgroundColor: 'white',
	},
	button: {
		alignItems: "center",
		backgroundColor: "tomato",
		padding: 10,
	},
	textoBoton: {
		color: '#ffffff'
	},
	score: {
		fontStyle: 'italic',
		fontSize: 50,
		color: '#141823',
		textAlign: 'center'
	},
})