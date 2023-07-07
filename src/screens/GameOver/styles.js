import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
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
});
