import { ReactNode } from "react"
import { View, Text, Pressable, StyleSheet } from "react-native"
import { Colors } from "../../utils/colors"

type Props = {
    onPress: () => void
    children: ReactNode
}
export const PrimaryButton = ({children, onPress}: Props) => {

    return(
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({pressed}) => pressed ? [styles.container, styles.pressed] : styles.container}
                onPress={onPress}
                android_ripple={{color: Colors.primary600}}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius: 28,
        margin: 4,
        overflow:'hidden'
    },
    container: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2
    },
    buttonText: {
        color: '#FFF',
        textAlign: 'center'
    },
    pressed:{
        opacity: 0.75
    }
})