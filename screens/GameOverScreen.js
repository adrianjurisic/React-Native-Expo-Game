import { Image, StyleSheet, Text, View, useWindowDimensions, ScrollView } from "react-native";
import Title from '../components/ui/Title';
import Colors from '../constants/Colors';
import PrimaryButton from '../components/ui/PrimaryButton'

function GameOverScreen({rounds, userNumber, onStartNewGame}){
    const {height, width} = useWindowDimensions();

    let imageSize = 300;

    if(width < 380){
        imageSize = 150;
    }

    if(height < 500){
        imageSize= 110;
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
    }

    return (
        <ScrollView style={styles.mainScreen}>
        <View style={styles.screen}>
            <Title>GAME OVER!</Title>
            <View style={[styles.imageContainer, imageStyle]}>
                <Image style={styles.image} source={require('../assets/images/success.jpg')}/>
            </View>
            <Text style={styles.summaryText}>Your phone needs <Text style={styles.xy}>{rounds}</Text> rounds to guess the number <Text style={styles.xy}>{userNumber}</Text>.</Text>
            <View style={styles.button}>
                <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
            </View>
        </View>
        </ScrollView>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
    },
    screen: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
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