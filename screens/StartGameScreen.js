import { TextInput, View, StyleSheet, Alert, Text, useWindowDimensions, KeyboardAvoidingView, ScrollView } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/Colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";

function StartGameScreen({onPickNumber}){
    const [enteredNumber, setEnteredNumber] = useState('');

    const {width, height} = useWindowDimensions();

    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText);
    }

    function resetInputHandler(){
        setEnteredNumber('');
    }

    function confirmInputHandler(){
        const chosenNumber = parseInt(enteredNumber);

        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert(
                'Invalid number', 
                'Number has to be a number between 1 and 99!',
                [{text: 'Ok', style:'destructive', onPress: resetInputHandler}]
            );
            return;
        }

        onPickNumber(chosenNumber);
    }

    const marginTopDistance = height < 500 ? 30 : 80;

    return (
        <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
            <Title>Guess My Number</Title>
            <Card>
                <Text style={styles.instructionText}>Enter a number</Text>
                <TextInput 
                    style={styles.numberInput} 
                    maxLength={2} 
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={numberInputHandler}
                    value={enteredNumber}
                />
                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.button}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
        </KeyboardAvoidingView>
        </ScrollView>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create ({
    screen: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        alignItems: 'center'
    },
    instructionText: {
        color: Colors.primary300,
        fontFamily: 'open-sans',
        fontSize: 24,
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttons: {
        flexDirection: 'row',
        marginTop: 10,
    },
    button: {
        flex: 1,
    }
});