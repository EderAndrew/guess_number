import { StyleSheet, View } from "react-native"
import { Colors } from "../../utils/colors"

type Props = {
    children: React.ReactNode
}
export const Card = ({children}: Props) => {
    return (
        <View style={styles.inputContainer}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        padding: 16,
        marginHorizontal: 24,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4, //Android
        //iOS
        shadowColor: '#000',
        shadowOffset:{
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
})