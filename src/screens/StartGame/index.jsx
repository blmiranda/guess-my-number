import { useState } from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';
import PrimaryButton from '../../components/PrimaryButton';

const StartGame = () => {
  const [enteredNumber, setEnteredNumber] = useState('');

  function numberInputHandler() {
    setEnteredNumber(enteredNumber);
  }

  function confirmInputHandler() {}

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
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
      </View>
    </View>
  );
};

export default StartGame;
