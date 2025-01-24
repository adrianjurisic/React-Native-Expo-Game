import { View, Text, StyleSheet, Alert, } from "react-native";
import Title from "../components/ui/Title";
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

function generateRandomBetween(min, max, exclude){
    const rndNum = Math.floor(Math.random()* (max - min)) + min;

    if(rndNum === exclude){
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}){
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if (currentGuess === userNumber){
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);

    function nextGuessHandler(direction){
        if((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)){
            Alert.alert("Don't lie!", "You know that this is wrong...", [{text: 'Sorry!', style: 'cancel'}]);
            return;
        }
        if(direction === 'lower'){
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <Text style={styles.instructionText}>Higher or lower?</Text>
                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name="add" size={24} color="white"/>
                        </PrimaryButton>
                    </View>
                    <View style={styles.button}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="remove" size={24} color="white"/>
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
    instructionText: {
        color: Colors.primary300,
        fontFamily: 'open-sans',
        fontSize: 24,
    },
    buttons: {
        flexDirection: 'row',
        marginTop: 30,
    },
    button: {
        flex: 1,
    },
})