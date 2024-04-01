import { Text, View, StyleSheet, Alert } from "react-native"
import { Title } from "../components/Title"
import { useState, useEffect } from "react"
import { NumberContainer } from "../components/game/NumberContainer"
import { PrimaryButton } from "../components/ui/PrimaryButton"

const generateRandomBetween = (min: number, max: number, exclude: number) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min

    if(rndNum === exclude){
        return generateRandomBetween(min, max, exclude)
    }else{
        return rndNum
    }
}
type Props = {
    userNumber: number,
    onGameOver: () => void
}

let minBoundary = 1
let maxBoundary = 100

export const GameScreen = ({userNumber, onGameOver}:Props) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    useEffect(() => {
        if(currentGuess === userNumber){
            onGameOver()
        }
    }, [currentGuess, userNumber, onGameOver])

    const nextGuessHandler = (direction: 'lower' | 'greater') => {
        if(direction === 'lower' && currentGuess < userNumber || direction === 'greater' && currentGuess > userNumber){
            Alert.alert('Don\'t lie!', 'You know that this is wrong...', [{text: 'Sorry!', style: 'cancel'}])
            return
        }

        if(direction === 'lower'){
            maxBoundary = currentGuess  
        }else{
            minBoundary = currentGuess + 1  
        }

        const newRndomNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRndomNumber)
    }

    return(
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or Lower?</Text>
                <View>
                    <PrimaryButton onPress={() => nextGuessHandler('greater')}>+</PrimaryButton>
                    <PrimaryButton onPress={() => nextGuessHandler('lower')}>-</PrimaryButton>
                </View>
            </View>
            {/*<View>LOG ROUNDS</View>*/}
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 24
    },
    
})