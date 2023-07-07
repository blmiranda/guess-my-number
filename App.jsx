import { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import Background from './src/components/Background';

import StartGame from './src/screens/StartGame';
import Game from './src/screens/Game';
import GameOver from './src/screens/GameOver';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [guessRounds, setGuessRounds] = useState(0);
  const [gameIsOver, setGameIsOver] = useState(true);

  const [fontIsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontIsLoaded) {
    return <AppLoading />;
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGame onPickedNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <Game userNumber={userNumber} onGameIsOver={gameOverHandler} />;
  }

  if (userNumber && gameIsOver) {
    screen = (
      <GameOver
        userNumber={userNumber}
        userRounds={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return <Background>{screen}</Background>;
}
