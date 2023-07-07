import { View, Text, Image } from 'react-native';
import styles from './styles';

import Title from '../../components/Title';

const GameOver = ({ userNumber }) => {
  return (
    <View style={styles.screen}>
      <Title>Game Over</Title>

      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/images/success.png')}
          style={styles.image}
        />
      </View>

      <Text>Your phone needed X rounds to guess the number Y.</Text>
    </View>
  );
};

export default GameOver;
