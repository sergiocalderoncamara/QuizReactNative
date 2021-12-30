import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Header from './TicTacToe/Header.jsx';
import Board from './TicTacToe/Board.jsx';
import Reset from './TicTacToe/Reset.jsx';

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

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://myjson.dit.upm.es/api/bins/ccr5");
      const myjson = await res.json();
      console.log(myjson);
      setTurn(myjson.turn);
      setMoves(myjson.moves);
      setValues(myjson.values);
    }

    fetchData();
  }, []);

  function appClick(rowNumber, columnNumber) {
      let valuesCopy = JSON.parse(JSON.stringify(values));
      let newMovement = turn === PLAYERX ? 'X' : '0';
      valuesCopy[rowNumber][columnNumber] = newMovement;
      setTurn(turn === PLAYERX ? PLAYER0 : PLAYERX);
      setValues(valuesCopy);
      setMoves(moves + 1); 
  }

  function resetClick(){
    setTurn(PLAYERX);
    setMoves(0);
    setValues([
      ['-', '-', '-'],
      ['-', '-', '-'],
      ['-', '-', '-']
    ]);
  }

  
  let text = "Turn of " + turn;

  return (
    <View style={{flex:1, margin: 30}}>
      <Header text={text}/>
      <Board values={values}  appClick={appClick}/>
      <Text style={{fontSize: 25, padding: 30, textAlign:'center'}}>Number of moves: {moves}</Text>
      <Reset resetClick={resetClick}></Reset>
    </View>
  );


}