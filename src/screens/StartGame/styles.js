import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

export default StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
  },
  numberInput: {
    color: theme.accent500,
    width: 50,
    height: 50,
    marginVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: theme.accent500,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
