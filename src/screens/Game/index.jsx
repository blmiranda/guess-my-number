import { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import styles from './styles.js';

import Title from '../../components/Title';
import GuessContainer from '../../components/GuessContainer';
import PrimaryButton from '../../components/PrimaryButton';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

const Game = ({ userNumber, onGameIsOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameIsOver();
    }
  }, [currentGuess, userNumber, onGameIsOver]);

  function nextGuessHandler(direction) {
    if (
      (direction === 'lower' && userNumber > currentGuess) ||
      (direction === 'greater' && userNumber < currentGuess)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newGuess = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );

    setCurrentGuess(newGuess);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>

      <GuessContainer>{currentGuess}</GuessContainer>

      <View>
        <Text>Higher or Lower</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
            Lower
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
            Higher
          </PrimaryButton>
        </View>
      </View>

      <View>
        <Text>Log Rounds</Text>
      </View>
    </View>
  );
};

export default Game;
