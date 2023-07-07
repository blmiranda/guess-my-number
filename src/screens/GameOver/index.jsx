import { View, Text, Image } from 'react-native';
import styles from './styles';

import Title from '../../components/Title';
import PrimaryButton from '../../components/PrimaryButton';

const GameOver = ({ userNumber, roundsNumber, onStartNewGame }) => {
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
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{' '}
        rounds to guess the number{' '}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>

      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOver;
