import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  inputContainer: {
    backgroundColor: '#4e0329',
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
    color: '#ddb52f',
    width: 50,
    height: 50,
    marginVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#ddb52f',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
});
