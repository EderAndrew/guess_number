import { SafeAreaView, Image, StyleSheet, View, Text, useWindowDimensions, ScrollView } from "react-native"
import { Title } from "../components/ui/Title"
import { Colors } from "../utils/colors"
import { PrimaryButton } from "../components/ui/PrimaryButton"
//import { deviceWidth } from "../utils/dimensions"

type Props = {
   roundersNumber: number,
   userNumber: number,
   onStartNewGame: () => void 
}

export const GameOverScreen = ({roundersNumber, userNumber, onStartNewGame}:Props) => {
    const { width, height } = useWindowDimensions()

    let imageSize = 300

    if(width < 380){
        imageSize = 150
    }

    if(height < 400){
        imageSize = 80
    }

    const imageStyle = {width: imageSize, height: imageSize, borderRadius: imageSize / 2}
    return(
        <ScrollView style={styles.screen}>
            <SafeAreaView style={styles.rootContainer}>
                <Title>GAME OVER</Title>
                <View style={[styles.imageContainer, imageStyle]}>
                    <Image style={styles.image} source={require('../../assets/images/success.png')}/>
                </View>
                <Text style={styles.summaryText}>
                    Your phone needed 
                    <Text style={styles.highlight}> {roundersNumber} </Text> 
                    rounds to guess the number  
                    <Text style={styles.highlight}> {userNumber} </Text>
                </Text>
                <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1
    },
    rootContainer: {
      padding: 24,
      justifyContent:'center',
      alignItems: 'center'
    },
    imageContainer: {
        /* width: deviceWidth < 380 ? 150 : 300,
        height: deviceWidth < 380 ? 150 : 300,
        borderRadius: deviceWidth < 380 ? 75 : 150, */
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image:{
        width: '100%',
        height: '100%',
    },
    summaryText:{
        fontFamily:'open-sans',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 24
    },
    highlight:{
        fontFamily:'open-sans-bold',
        color: Colors.primary500
    },
})