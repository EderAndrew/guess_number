import React from 'react'
import { Text, StyleSheet } from 'react-native'

const TitleText = props => {
    return(
        <Text style={styles.title}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'RobotoCondensed-Bold', 
        fontSize: 22
    }
})

export default TitleText