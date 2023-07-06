import { useState, useEffect } from 'react';

import Background from './src/components/Background';

import StartGame from './src/screens/StartGame';
import Game from './src/screens/Game';
import GameOver from './src/screens/GameOver';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  let screen = <StartGame onPickedNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <Game userNumber={userNumber} onGameIsOver={gameOverHandler} />;
  }

  if (userNumber && gameIsOver) {
    screen = <GameOver userNumber={userNumber} />;
  }

  return <Background>{screen}</Background>;
}
