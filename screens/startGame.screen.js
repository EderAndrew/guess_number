import React, {useState} from 'react'
import {
    View,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native'

//Import componentscd here
import Card from '../components/Card/Card.component'
import ButtonComponent from '../components/Button/Button.component'
import InputComponent from '../components/Input/Input.component'
import Colors from '../constants/colors.constants'


const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectNumber] = useState()

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    const resetInputHandler = () => {
        setEnteredValue('')
        setConfirmed(false)
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue)
        if(chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99){
            return
        }
        setConfirmed(true)
        setSelectNumber(parseInt(enteredValue))
        setEnteredValue('')
    }

    let confirmedOutput

    if(confirmed){
        confirmedOutput = <Text>Chosen Number: {selectedNumber}</Text>
    }

    return(
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <View style={styles.container}>
                <Text style={styles.title}>Start New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a number</Text>
                    <InputComponent
                    style={styles.input}
                    blurOnSubmit
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType="number-pad"
                    maxLength={2}
                    onChangeText={numberInputHandler}
                    value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <ButtonComponent
                          title="Reset"
                          style={{backgroundColor: Colors.accent}}
                          onPress={resetInputHandler}
                        />
                        <ButtonComponent
                          title="Confirm"
                          style={{backgroundColor: Colors.primary}}
                          onPress={confirmInputHandler}
                        />
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    title:{
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer:{
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer:{
        flexDirection: "row",
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    input:{
        width: 50,
        textAlign: 'center',
        height:40
    }
})

export default StartGameScreen