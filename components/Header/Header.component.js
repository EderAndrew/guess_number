import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

//import components here
import Colors from '../../constants/colors.constants'
import TitleText from '../TitleText/TitleText.component'

const Header = props => {
    return(
        <View style={styles.header}>
            <TitleText>{props.title}</TitleText> 
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 90,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Header