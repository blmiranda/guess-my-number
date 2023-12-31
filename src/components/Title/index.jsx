import { Text } from 'react-native';
import styles from './styles.js';

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;
