import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  buttonOuterContainer: {
    flex: 1,
    margin: 4,
    borderRadius: 5,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: '#72063c',
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
