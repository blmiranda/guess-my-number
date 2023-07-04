import { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';

import Title from '../../components/Title';
import GuessContainer from '../../components/GuessContainer/index.jsx';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

const Game = ({ userNumber }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>

      <GuessContainer>{currentGuess}</GuessContainer>

      <View>
        <Text>Higher or Lower</Text>
      </View>

      <View>
        <Text>Log Rounds</Text>
      </View>
    </View>
  );
};

export default Game;
