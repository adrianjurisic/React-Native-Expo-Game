import { Image, StyleSheet, Text, View } from "react-native";
import Title from '../components/ui/Title';
import Colors from '../constants/Colors';
import PrimaryButton from '../components/ui/PrimaryButton'

function GameOverScreen({rounds, userNumber, onStartNewGame}){
    return (
        <View style={styles.screen}>
            <Title>GAME OVER!</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/success.jpg')}/>
            </View>
            <Text style={styles.summaryText}>Your phone needs <Text style={styles.xy}>{rounds}</Text> rounds to guess the number <Text style={styles.xy}>{userNumber}</Text>.</Text>
            <View style={styles.button}>
                <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
            </View>
        </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        borderRadius: 200,
        width: 300,
        height: 300,
        borderWidth: 3,
        color: Colors.primary800,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary700,
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 24,
    },
    xy: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary300,
        fontSize: 26,
    },
    button: {
        fontSize: 24,
    },
});