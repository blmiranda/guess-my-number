import { View } from 'react-native';
import styles from './styles.js';

const Background = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default Background;
