import React, {useState, lazy} from 'react'
import {
    View,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
} from 'react-native'

//Import components here
import Card from '../components/Card/Card.component'
import ButtonComponent from '../components/Button/Button.component'
import InputComponent from '../components/Input/Input.component'
import NumberContainer from '../components/NumberContainer/NumberContainer.component'
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
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert(
                'Invalid number!',
                'Number has to be a number between 1 and 99.',
                [
                    {
                        text: 'Okay',
                        style: 'destructive',
                        onPress: resetInputHandler
                    }
                ]
            )
            return
        }
        setConfirmed(true)
        setSelectNumber(parseInt(enteredValue))
        setEnteredValue('')
        Keyboard.dismiss()
    }

    let confirmedOutput

    if(confirmed){
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <Text>You selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <ButtonComponent
                  title="START GAME"
                  style={{backgroundColor: Colors.primary, width: 120}}
                  onPress={() => props.onStartGame(selectedNumber)}
                />
            </Card>
        )
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
    },
    summaryContainer:{
        marginTop: 20,
        alignItems: 'center'
    }
})

export default StartGameScreen