import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import TicTacToe from './TicTacToe/TicTacToe'
import { getAPI } from "../../api";


function App(props) {

  const [quizzes, setQuizzes] = useState([]);

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

  return (
    <>
        <View>
            <TicTacToe />
        </View>
    </>
  );
}

export default App;
