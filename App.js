import React, { useState } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

//Import Components here
import Header from './components/Header/Header.component'
import StartGameScreen from './screens/startGame.screen'
import GameScreen from './screens/Gamescreen.screens'
import GameOverScreen from './screens/GameOver.screen'

const App = () => {
  const [userNumber, setUserNumber] = useState()
  const [guessRounds, setGuessRounds] = useState(0)

  const configurerNewGameHandler = () => {
    setGuessRounds(0)
    setUserNumber(null)
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
    setGuessRounds(0)
  }

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds)
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />

  if(userNumber && guessRounds <= 0){
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
  }else if(guessRounds > 0){
    content = <GameOverScreen
      roundsNumber={guessRounds}
      userNumber={userNumber}
      onRestart={configurerNewGameHandler}
    />
  }

  return(
    <SafeAreaView style={styles.container}>
        <Header title="Guess a Number"/>
        {content}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})

export default App