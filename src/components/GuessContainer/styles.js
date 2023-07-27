import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../global/styles/theme';

const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    margin: 24,
    padding: deviceWidth < 380 ? 12 : 24,
    borderWidth: 4,
    borderColor: theme.accent500,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: theme.accent500,
    fontSize: deviceWidth < 380 ? 28 : 36,
    fontWeight: 'bold',
  },
});
