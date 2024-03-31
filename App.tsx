import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { StartGameScreen } from './src/screens/StartGameScreen';
import { GameScreen } from './src/screens/GameScreen';

import { Colors } from './src/utils/colors';

export default function App() {
  const [userNumber, setUserNumber] = useState('');

  const pickedNumberHandler = (pickedNumber: number) => {
    setUserNumber(pickedNumber.toString());
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

  if(userNumber){
    screen = <GameScreen userNumber={parseInt(userNumber)}/>
  }

  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView>{screen}</SafeAreaView>
      </ImageBackground>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage:{
    opacity: 0.15
  }
});
