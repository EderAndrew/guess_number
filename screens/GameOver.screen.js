import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'


import ButtonComponent from '../components/Button/Button.component'
import Color from '../constants/colors.constants'

const GameOverScreen = props => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>The Game is Over!</Text>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/img/success.png')}
                    style={styles.image}
                    resizeMode='cover'
                />    
            </View>            
            <Text>Number of Rounds: {props.roundsNumber}</Text>
            <Text>Number was: {props.userNumber}</Text>
            <ButtonComponent
              title='NEW GAME'
              style={{backgroundColor: Color.primary, width: 120}}
              onPress={props.onRestart}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontFamily:'RobotoCondensed-Bold',
        fontSize: 20,
        color: Color.primary
    },
    imageContainer:{
        width:'70%',
        height: 280,
        borderRadius: 300,
        borderWidth: 3,
        borderColor: Color.accent,
        overflow: 'hidden',
        marginVertical:30
    },
    image:{
        width:'100%',
        height: '100%'
    }
})

export default GameOverScreen
