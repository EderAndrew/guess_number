import { SafeAreaView, View, TextInput, StyleSheet, Alert } from "react-native"
import { PrimaryButton } from "../components/ui/PrimaryButton"
import { useState } from "react"
import { Colors } from "../utils/colors"

type Props ={
    onPickNumber: (number: number) => void
}

export const StartGameScreen = ({onPickNumber}:Props) => {
    const [enteredNumber, setEnteredNumber] = useState('')

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
    return(
        <SafeAreaView style={styles.container}>
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
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        padding: 16,
        marginHorizontal: 24,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4, //Android
        //iOS
        shadowColor: '#000',
        shadowOffset:{
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.25
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