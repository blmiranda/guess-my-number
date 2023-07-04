import { View, Text } from 'react-native';
import styles from './styles.js';

import Title from '../../components/Title';

const Game = () => {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>

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
