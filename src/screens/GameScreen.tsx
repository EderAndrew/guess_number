import { Text, View, StyleSheet } from "react-native"
import { Title } from "../components/Title"
import { useState } from "react"
import { NumberContainer } from "../components/game/NumberContainer"

const generateRandomBetween = (min: number, max: number, exclude: number) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min

    if(rndNum === exclude){
        return generateRandomBetween(min, max, exclude)
    }else{
        return rndNum
    }
}
type Props = {
    userNumber: number
}

export const GameScreen = ({userNumber}:Props) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    return(
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or Lower?</Text>
                {/*+ -*/}
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