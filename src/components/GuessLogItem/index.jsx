import { View, Text } from 'react-native';
import styles from './styles';

const GuessLogItem = ({ roundNumber, guess }) => {
  return (
    <View style={styles.listItem}>
      <Text>#{roundNumber}</Text>
      <Text>Opponent's Guess: {guess}</Text>
    </View>
  );
};

export default GuessLogItem;
