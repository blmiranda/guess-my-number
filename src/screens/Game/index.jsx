import { useState, useEffect } from 'react';
import { View, Text, Alert, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles.js';

import Title from '../../components/Title';
import GuessContainer from '../../components/GuessContainer';
import PrimaryButton from '../../components/PrimaryButton';
import Card from '../../components/Card';
import InstructionText from '../../components/InstructionText';
import GuessLogItem from '../../components/GuessLogItem';

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
  const [guessRounds, setGuessRounds] = useState([
    { text: initialGuess, key: initialGuess },
  ]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameIsOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameIsOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

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

    const newGuessRound = { text: newGuess, key: newGuess };

    setCurrentGuess(newGuess);
    setGuessRounds((prevGuessRounds) => [newGuessRound, ...prevGuessRounds]);
  }

  const guessRoundsListLength = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>

      <GuessContainer>{currentGuess}</GuessContainer>

      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower ?
        </InstructionText>

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>

          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>

      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => {
            return (
              <GuessLogItem
                roundNumber={guessRoundsListLength - itemData.index}
                guess={itemData.item.text}
              />
            );
          }}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
};

export default Game;
