import React from 'react'
import { View, StyleSheet, Text, TextInput, Button } from 'react-native'

//Import components here
import Card from '../components/Card/Card.component'
import ButtonComponent from '../components/Button/Button.component'
import Colors from '../constants/colors.constants'

const StartGameScreen = props => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Start New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <ButtonComponent title="Reset" style={{backgroundColor: Colors.accent}} onPress={() => {}}/>
                    <ButtonComponent title="Confirm" style={{backgroundColor: Colors.primary}} onPress={() => {}}/>
                </View>
            </Card>
        </View>
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
    }
})

export default StartGameScreen