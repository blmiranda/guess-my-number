import { Text } from 'react-native';
import styles from './styles';

const InstructionText = ({ children }) => {
  return <Text style={styles.instructionText}>{children}</Text>;
};

export default InstructionText;
