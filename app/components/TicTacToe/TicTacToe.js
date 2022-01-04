import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Header from './Header.jsx';
import Board from './Board.jsx';
import Reset from './Reset.jsx';

const PLAYERX = "Player 1 - Xs";
const PLAYER0 = "Player 2 - 0s";

export default function App(props) {
  const [turn, setTurn] = useState(PLAYERX);
  const [moves, setMoves] = useState(0);
  const [values, setValues] = useState([
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
  ]);
  const [tenemosGanador, setTenemosGanador] = useState(false);
  const [winner, setWinner] = useState("");

  function appWin() {
    if ((values[0][0] === 'X') && (values[0][1] === 'X') && (values[0][2] === 'X')) {
      setTenemosGanador(true);
      setWinner("¡Han ganado las X!");
    }
    if ((values[0][0] === 'X') && (values[1][1] === 'X') && (values[2][2] === 'X')) {
      setTenemosGanador(true);
      setWinner("¡Han ganado las X!");
    }
    if ((values[0][0] === 'X') && (values[1][0] === 'X') && (values[2][0] === 'X')) {
      setTenemosGanador(true);
      setWinner("¡Han ganado las X!");
    }
    if ((values[1][0] === 'X') && (values[1][1] === 'X') && (values[1][2] === 'X')) {
      setTenemosGanador(true);
      setWinner("¡Han ganado las X!");
    }
    if ((values[2][0] === 'X') && (values[2][1] === 'X') && (values[2][2] === 'X')) {
      setTenemosGanador(true);
      setWinner("¡Han ganado las X!");
    }
    if ((values[0][1] === 'X') && (values[1][1] === 'X') && (values[2][1] === 'X')) {
      setTenemosGanador(true);
      setWinner("¡Han ganado las X!");
    }
    if ((values[0][2] === 'X') && (values[1][2] === 'X') && (values[2][2] === 'X')) {
      setTenemosGanador(true);
      setWinner("¡Han ganado las X!");
    }
    if ((values[0][2] === 'X') && (values[1][1] === 'X') && (values[2][0] === 'X')) {
      setTenemosGanador(true);
      setWinner("¡Han ganado las X!");
    }

    if ((values[0][0] === '0') && (values[0][1] === '0') && (values[0][2] === '0')) {
      setTenemosGanador(true);
      setWinner("¡Han ganado los 0!");
    }
    if ((values[0][0] === '0') && (values[1][1] === '0') && (values[2][2] === '0')) {
      setTenemosGanador(true);
      setWinner("¡Han ganado los 0!");
    }
    if ((values[0][0] === '0') && (values[1][0] === '0') && (values[2][0] === '0')) {
      setTenemosGanador(true);
      setWinner("¡Han ganado los 0!");
    }
    if ((values[1][0] === '0') && (values[1][1] === '0') && (values[1][2] === '0')) {
      setTenemosGanador(true);
      setWinner("¡Han ganado los 0!");
    }
    if ((values[2][0] === '0') && (values[2][1] === '0') && (values[2][2] === '0')) {
      setTenemosGanador(true);
      setWinner("¡Han ganado los 0!");
    }
    if ((values[0][1] === '0') && (values[1][1] === '0') && (values[2][1] === '0')) {
      setTenemosGanador(true);
      setWinner("¡Han ganado los 0!");
    }
    if ((values[0][2] === '0') && (values[1][2] === '0') && (values[2][2] === '0')) {
      setTenemosGanador(true);
      setWinner("¡Han ganado los 0!");
    }
    if ((values[0][2] === '0') && (values[1][1] === '0') && (values[2][0] === '0')) {
      setTenemosGanador(true);
      setWinner("¡Han ganado los 0!");
    }
  }

  useEffect(() => {
    appWin();
  });

  /*useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://myjson.dit.upm.es/api/bins/ccr5");
      const myjson = await res.json();
      console.log(myjson);
      setTurn(myjson.turn);
      setMoves(myjson.moves);
      setValues(myjson.values);
    }

    fetchData();
  }, []);*/

  function appClick(rowNumber, columnNumber) {
    if(!tenemosGanador) {
      let valuesCopy = JSON.parse(JSON.stringify(values));
      let newMovement = turn === PLAYERX ? 'X' : '0';
      valuesCopy[rowNumber][columnNumber] = newMovement;
      setTurn(turn === PLAYERX ? PLAYER0 : PLAYERX);
      setValues(valuesCopy);
      setMoves(moves + 1);
    }
  }

  function resetClick() {
    setTurn(PLAYERX);
    setMoves(0);
    setValues([
      ['-', '-', '-'],
      ['-', '-', '-'],
      ['-', '-', '-']
    ]);
    setTenemosGanador(false);
  }


  let text = "Turn of " + turn;

  return (
    <View style={{ flex: 1, margin: 30 }}>
      <Header text={tenemosGanador ? winner : text} />
      <Board values={values} appClick={appClick} />
      <Text style={{ fontSize: 25, padding: 30, textAlign: 'center' }}>Number of moves: {moves}</Text>
      <Reset resetClick={resetClick}></Reset>
    </View>
  );


}