import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/Colors';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber = {pickedNumberHandler}/>;

  if(userNumber){
    screen = <GameScreen userNumber={userNumber}/>;
  }

  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} 
                    style={styles.container}
    >
      <ImageBackground source={require('./assets/images/background.jpg')} 
                       resizeMode='cover' 
                       style={styles.container} 
                       imageStyle={styles.backgroundImage}
        >
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>    
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  }
});
