import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

export default StyleSheet.create({
  inputContainer: {
    backgroundColor: theme.primary800,
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    elevation: 4,
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
