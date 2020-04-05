import React, { useState } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

//Import Components here
import Header from './components/Header/Header.component'
import StartGameScreen from './screens/startGame.screen'
import GameScreen from './screens/Gamescreen.screens'

const App = () => {
  const [userNumber, setUserNumber] = useState()

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />

  if(userNumber){
    content = <GameScreen userChoice={userNumber} />
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
    flex:1
  }
})

export default App