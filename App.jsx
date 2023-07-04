import { useState } from 'react';

import Background from './src/components/Background';

import StartGame from './src/screens/StartGame';
import Game from './src/screens/Game';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGame onPickedNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <Game />;
  }

  return <Background>{screen}</Background>;
}
