import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

export default StyleSheet.create({
  listItem: {
    backgroundColor: theme.accent500,
    width: '70%',

    flexDirection: 'row',
    justifyContent: 'space-between',

    marginVertical: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: theme.primary800,
    borderRadius: 8,

    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 3,
  },
});
