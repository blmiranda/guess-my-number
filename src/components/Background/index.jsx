import { ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles.js';
import theme from '../../global/styles/theme';

const Background = ({ children }) => {
  return (
    <LinearGradient
      colors={[theme.primary700, theme.accent500]}
      style={styles.container}
    >
      <ImageBackground
        source={require('../../../assets/background.png')}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.container}>{children}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};

export default Background;
