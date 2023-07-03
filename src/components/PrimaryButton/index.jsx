import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const PrimaryButton = ({ children }) => {
  function pressHandler() {
    console.log('Pressed!');
  }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={pressHandler}
        style={styles.buttonInnerContainer}
        android_ripple={{ color: '#640233' }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;
