import React, { useState } from 'react';
import { View, TextInput, Alert } from 'react-native';
import styles from './styles';
import PrimaryButton from '../../components/PrimaryButton';

const StartGame = ({ onPickedNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState('');

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

  return (
    <View style={styles.inputContainer}>
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
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGame;
