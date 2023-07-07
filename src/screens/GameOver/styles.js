import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

export default StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  imageContainer: {
    width: 300,
    height: 300,
    margin: 36,

    borderWidth: 3,
    borderColor: theme.primary800,
    borderRadius: 150,

    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    marginBottom: 24,

    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
  },
  highlight: {
    color: theme.primary500,
    fontFamily: 'open-sans-bold',
  },
});
