import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../global/styles/theme';

const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  card: {
    backgroundColor: theme.primary800,
    alignItems: 'center',
    marginTop: deviceWidth < 380 ? 18 : 36,
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
});
