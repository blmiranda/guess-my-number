import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles.js';

const Background = ({ children }) => {
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.container}>
      {children}
    </LinearGradient>
  );
};

export default Background;
