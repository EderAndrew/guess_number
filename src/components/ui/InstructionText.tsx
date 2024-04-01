import { Text, StyleSheet } from 'react-native'
import { Colors } from '../../utils/colors'

type Props = {
    children: React.ReactNode,
    style?: object
}

export const InstructionText = ({children, style}: Props) => {
    return <Text style={[styles.instructionText, style]}>{children}</Text>
}

const styles = StyleSheet.create({
    instructionText:{
        fontFamily: 'open-sans',
        color: Colors.accent500,
        fontSize: 24
    }
})