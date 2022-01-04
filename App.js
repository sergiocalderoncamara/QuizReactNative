import { StyleSheet, Text, View } from 'react-native';
import GameScreen from './app/components/GameScreen';
import TicTacToe from './app/components/TicTacToe/TicTacToe';
import Quiz from './app/components/Quiz/Quiz';
import Pokedex from './app/components/Pokedex/Pokedex';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

enableScreens();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerTintColor: 'white', headerStyle: { backgroundColor: 'tomato' } }}>
        <Stack.Screen name="Home" component={GameScreen} styles={styles}/>
        <Stack.Screen name="TicTacToe" component={TicTacToe} styles={styles} />
        <Stack.Screen name="Quiz" component={Quiz} styles={styles} />
        <Stack.Screen name="Pokedex" component={Pokedex} styles={styles} />
      </Stack.Navigator>
    </NavigationContainer>
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
