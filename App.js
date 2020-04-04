import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

//Import Components here
import Header from './components/Header/Header.component'
import StartGameScreen from './screens/startGame.screen'

const App = () => {
  return(
    <SafeAreaView style={styles.container}>
        <Header title="Guess a Number"/>
        <StartGameScreen />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})

export default App