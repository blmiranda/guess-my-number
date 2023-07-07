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

      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>X</Text> rounds to
        guess the number <Text style={styles.highlight}>Y</Text>.
      </Text>
    </View>
  );
};

export default GameOver;
