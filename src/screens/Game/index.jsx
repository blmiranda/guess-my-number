import { View, Text } from 'react-native';
import styles from './styles.js';

const Game = () => {
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>

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
