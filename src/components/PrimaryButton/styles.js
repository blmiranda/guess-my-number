import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

export default StyleSheet.create({
  buttonOuterContainer: {
    flex: 1,
    margin: 4,
    borderRadius: 5,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: theme.primary500,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
