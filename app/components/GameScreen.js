import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { getAPI } from "../../api";
import { StatusBar } from 'expo-status-bar';
import Actionbar from './Actionbar';

export default function GameScreen(props) {

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
      <View style={styles.container}>
        <Actionbar navegar={props.navigation.navigate} />
        <Text>Estás en Home</Text>
        <StatusBar style="auto" />
      </View>
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
});
