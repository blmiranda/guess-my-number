import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

export default StyleSheet.create({
  title: {
    color: theme.accent500,
    padding: 12,
    borderWidth: 2,
    borderColor: theme.accent500,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
