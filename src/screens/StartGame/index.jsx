import { View, TextInput } from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';

const StartGame = () => {
  return (
    <View>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

export default StartGame;
