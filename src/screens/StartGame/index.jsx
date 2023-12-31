import React, { useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Text,
  TextInput,
  Alert,
  useWindowDimensions,
} from 'react-native';
import styles from './styles';

import Title from '../../components/Title';
import Card from '../../components/Card';
import PrimaryButton from '../../components/PrimaryButton';
import InstructionText from '../../components/InstructionText';

const StartGame = ({ onPickedNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState('');
  const { width, height } = useWindowDimensions();

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 99) {
      Alert.alert('Invalid Number!', 'Number must be between 0 and 99.', [
        { text: 'Okay', style: 'destructive', onPress: resetInputHandler },
      ]);
      return;
    }

    onPickedNumber(chosenNumber);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  const marginTopDistance = height < 380 ? 30 : 100;

  return (
    <ScrollView style={styles.root}>
      <KeyboardAvoidingView style={styles.root} behavior="position">
        <View style={[styles.screen, { marginTop: marginTopDistance }]}>
          <Title>Guess My Number</Title>

          <Card>
            <InstructionText>Enter a number !</InstructionText>

            <TextInput
              value={enteredNumber}
              onChangeText={numberInputHandler}
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
            />

            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>

              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGame;
