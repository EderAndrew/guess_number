import { Text, StyleSheet, Platform } from "react-native"
import { Colors } from "../../utils/colors"

type Props = {
    children: React.ReactNode
}
export const Title = ({children}: Props) => {
    return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
    title:{
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        //fontWeight: 'bold',
        color:'#fff',
        textAlign: 'center',
        //borderWidth: Platform.OS === 'android' ? 2 : 0,
        borderWidth: Platform.select({android: 2, ios: 0}),
        borderColor: '#fff',
        padding: 12,
        maxWidth: '80%',
        width: 300
    }
})