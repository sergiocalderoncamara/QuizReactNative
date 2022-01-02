import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Game from '../Quiz/Game';
import Shortcut from '../Quiz/Shortcut';
import { getAPI } from "../../../api";

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
	const [quizzes, setQuizzes] = useState([{
		"id": 18,
		"question": "Capital of Cyprus",
		"answer": "Nicosia",
		"author": {
			"id": 1,
			"isAdmin": true,
			"username": "admin",
			"accountTypeId": 0,
			"profileId": null,
			"profileName": null,
			"photo": {
				"filename": "spg072.jpg",
				"mime": "image/jpeg",
				"url": "https://core.dit.upm.es/uploads/91712eceb48a55c134e80c8f38e955711cbeda8d59b19192fb75f945fcb0fb60"
			}
		},
		"attachment": {
			"filename": "capitals/Nicosia.jpg",
			"mime": "image/jpeg",
			"url": "https://core.dit.upm.es/uploads/capitals/Nicosia.jpg"
		},
		"favourite": false
	},
	{
		"id": 6,
		"question": "Capital of Germany",
		"answer": "Berlin",
		"author": {
			"id": 1,
			"isAdmin": true,
			"username": "admin",
			"accountTypeId": 0,
			"profileId": null,
			"profileName": null,
			"photo": {
				"filename": "spg072.jpg",
				"mime": "image/jpeg",
				"url": "https://core.dit.upm.es/uploads/91712eceb48a55c134e80c8f38e955711cbeda8d59b19192fb75f945fcb0fb60"
			}
		},
		"attachment": {
			"filename": "capitals/Berlin.jpg",
			"mime": "image/jpeg",
			"url": "https://core.dit.upm.es/uploads/capitals/Berlin.jpg"
		},
		"favourite": false
	},
	{
		"id": 5,
		"question": "Capital of Russia",
		"answer": "Moscow",
		"author": {
			"id": 1,
			"isAdmin": true,
			"username": "admin",
			"accountTypeId": 0,
			"profileId": null,
			"profileName": null,
			"photo": {
				"filename": "spg072.jpg",
				"mime": "image/jpeg",
				"url": "https://core.dit.upm.es/uploads/91712eceb48a55c134e80c8f38e955711cbeda8d59b19192fb75f945fcb0fb60"
			}
		},
		"attachment": {
			"filename": "capitals/Moscow.jpg",
			"mime": "image/jpeg",
			"url": "https://core.dit.upm.es/uploads/capitals/Moscow.jpg"
		},
		"favourite": false
	},
	{
		"id": 25,
		"question": "Capital of Egypt",
		"answer": "Cairo",
		"author": {
			"id": 1,
			"isAdmin": true,
			"username": "admin",
			"accountTypeId": 0,
			"profileId": null,
			"profileName": null,
			"photo": {
				"filename": "spg072.jpg",
				"mime": "image/jpeg",
				"url": "https://core.dit.upm.es/uploads/91712eceb48a55c134e80c8f38e955711cbeda8d59b19192fb75f945fcb0fb60"
			}
		},
		"attachment": {
			"filename": "capitals/Cairo.jpg",
			"mime": "image/jpeg",
			"url": "https://core.dit.upm.es/uploads/capitals/Cairo.jpg"
		},
		"favourite": false
	},
	{
		"id": 11,
		"question": "Capital of Canada",
		"answer": "Ottawa",
		"author": {
			"id": 1,
			"isAdmin": true,
			"username": "admin",
			"accountTypeId": 0,
			"profileId": null,
			"profileName": null,
			"photo": {
				"filename": "spg072.jpg",
				"mime": "image/jpeg",
				"url": "https://core.dit.upm.es/uploads/91712eceb48a55c134e80c8f38e955711cbeda8d59b19192fb75f945fcb0fb60"
			}
		},
		"attachment": {
			"filename": "capitals/Ottawa.jpg",
			"mime": "image/jpeg",
			"url": "https://core.dit.upm.es/uploads/capitals/Ottawa.jpg"
		},
		"favourite": false
	},
	{
		"id": 29,
		"question": "Capital of Finland",
		"answer": "Helsinki",
		"author": {
			"id": 1,
			"isAdmin": true,
			"username": "admin",
			"accountTypeId": 0,
			"profileId": null,
			"profileName": null,
			"photo": {
				"filename": "spg072.jpg",
				"mime": "image/jpeg",
				"url": "https://core.dit.upm.es/uploads/91712eceb48a55c134e80c8f38e955711cbeda8d59b19192fb75f945fcb0fb60"
			}
		},
		"attachment": {
			"filename": "capitals/Helsinki.jpg",
			"mime": "image/jpeg",
			"url": "https://core.dit.upm.es/uploads/capitals/Helsinki.jpg"
		},
		"favourite": false
	},
	{
		"id": 22,
		"question": "Capital of Latvia",
		"answer": "Riga",
		"author": {
			"id": 1,
			"isAdmin": true,
			"username": "admin",
			"accountTypeId": 0,
			"profileId": null,
			"profileName": null,
			"photo": {
				"filename": "spg072.jpg",
				"mime": "image/jpeg",
				"url": "https://core.dit.upm.es/uploads/91712eceb48a55c134e80c8f38e955711cbeda8d59b19192fb75f945fcb0fb60"
			}
		},
		"attachment": {
			"filename": "capitals/Riga.jpg",
			"mime": "image/jpeg",
			"url": "https://core.dit.upm.es/uploads/capitals/Riga.jpg"
		},
		"favourite": false
	},
	{
		"id": 36,
		"question": "Capital of Italy",
		"answer": "Rome",
		"author": {
			"id": 1,
			"isAdmin": true,
			"username": "admin",
			"accountTypeId": 0,
			"profileId": null,
			"profileName": null,
			"photo": {
				"filename": "spg072.jpg",
				"mime": "image/jpeg",
				"url": "https://core.dit.upm.es/uploads/91712eceb48a55c134e80c8f38e955711cbeda8d59b19192fb75f945fcb0fb60"
			}
		},
		"attachment": {
			"filename": "capitals/Rome.jpg",
			"mime": "image/jpeg",
			"url": "https://core.dit.upm.es/uploads/capitals/Rome.jpg"
		},
		"favourite": false
	},
	{
		"id": 34,
		"question": "Capital of Portugal",
		"answer": "Lisbon",
		"author": {
			"id": 1,
			"isAdmin": true,
			"username": "admin",
			"accountTypeId": 0,
			"profileId": null,
			"profileName": null,
			"photo": {
				"filename": "spg072.jpg",
				"mime": "image/jpeg",
				"url": "https://core.dit.upm.es/uploads/91712eceb48a55c134e80c8f38e955711cbeda8d59b19192fb75f945fcb0fb60"
			}
		},
		"attachment": {
			"filename": "capitals/Lisbon.jpg",
			"mime": "image/jpeg",
			"url": "https://core.dit.upm.es/uploads/capitals/Lisbon.jpg"
		},
		"favourite": false
	},
	{
		"id": 19,
		"question": "Capital of Azerbaijan",
		"answer": "Baku",
		"author": {
			"id": 1,
			"isAdmin": true,
			"username": "admin",
			"accountTypeId": 0,
			"profileId": null,
			"profileName": null,
			"photo": {
				"filename": "spg072.jpg",
				"mime": "image/jpeg",
				"url": "https://core.dit.upm.es/uploads/91712eceb48a55c134e80c8f38e955711cbeda8d59b19192fb75f945fcb0fb60"
			}
		},
		"attachment": {
			"filename": "capitals/Baku.jpg",
			"mime": "image/jpeg",
			"url": "https://core.dit.upm.es/uploads/capitals/Baku.jpg"
		},
		"favourite": false
	}
	]);

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
			if (element.answer.toLowerCase() === answers[index].toLowerCase()) {
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
		setCurrentQuiz(0);
		setInputValue("");
		setContadorPistas(3);
		setHoras(horasTimer);
		setMinutos(minutosTimer);
		setSegundos(segundosTimer);
	}

	const pista = () => {
		let copia = contadorPistas;
		if (copia > 0) {
			setInputValue(quizzes[currentQuiz].answer);
			recogerAnswer(quizzes[currentQuiz].answer);
			copia--;
		}
		setContadorPistas(copia);
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
								horas={horas} minutos={minutos} segundos={segundos} />

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