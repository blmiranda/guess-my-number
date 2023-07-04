import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

export default StyleSheet.create({
  container: {
    margin: 24,
    padding: 24,
    borderWidth: 4,
    borderColor: theme.accent500,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: theme.accent500,
    fontSize: 36,
    fontWeight: 'bold',
  },
});
