import { View, Text } from 'react-native';
import styles from './styles.js';

const GuessContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default GuessContainer;
