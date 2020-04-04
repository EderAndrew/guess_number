import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const ButtonComponent = props => {
    return(
        <TouchableOpacity style={{...styles.button, ...props.style}}>
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        width: 90,
        height:40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        color: 'white'
    }
})
export default ButtonComponent