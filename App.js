import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber = {pickedNumberHandler}/>;

  if(userNumber){
    screen = <GameScreen/>;
  }

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} 
                    style={styles.container}
    >
      <ImageBackground source={require('./assets/images/background.jpg')} 
                       resizeMode='cover' 
                       style={styles.container} 
                       imageStyle={styles.backgroundImage}
        >
        {screen}
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
