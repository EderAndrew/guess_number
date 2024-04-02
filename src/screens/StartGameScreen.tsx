import { SafeAreaView, View, TextInput, StyleSheet, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView } from "react-native"
import { PrimaryButton } from "../components/ui/PrimaryButton"
import { useState } from "react"
import { Colors } from "../utils/colors"
import { Title } from "../components/ui/Title"
import { Card } from "../components/ui/Card"
import { InstructionText } from "../components/ui/InstructionText"
import { deviceHeight } from "../utils/dimensions"

type Props ={
    onPickNumber: (number: number) => void
}

export const StartGameScreen = ({onPickNumber}:Props) => {
    const [enteredNumber, setEnteredNumber] = useState('')

    const { width, height } = useWindowDimensions()

    const confirmNumberHandler = () => {
        const chooseNumber = parseInt(enteredNumber)
        
        if(isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99){
            Alert.alert('Invalid Number!',
                'You must enter a number between 1 and 99.',
                [{ text: 'Okay', style: 'destructive', onPress: resetNumberHandler }],
            )
            return
        }

        onPickNumber(chooseNumber)
    }
    const resetNumberHandler = () => {
        setEnteredNumber('')
    }

    const marginTopDistance = height < 380 ? 30 : 100
    
    return(
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior="position">
             <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
                <Title>Guess My number</Title>
                    <Card>
                        <InstructionText>Enter a Number</InstructionText>
                        <TextInput
                            style={styles.numberInput}
                            maxLength={2}
                            keyboardType="number-pad"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={number => setEnteredNumber(number)}
                            value={enteredNumber}
                        />
                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={resetNumberHandler}>Reset</PrimaryButton>
                            </View>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={confirmNumberHandler}>Confirm</PrimaryButton>
                            </View>
                        </View>
                    </Card> 
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1
    },
    rootContainer:{
        marginTop: deviceHeight < 400 ? 30 : 100,
        alignItems: 'center',
    },
    
    numberInput:{
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer:{
        flexDirection: 'row',
    },
    buttonContainer:{
        flex: 1
    }
})