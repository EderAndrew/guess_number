import { Text, StyleSheet } from "react-native"
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
        borderWidth: 2,
        borderColor: '#fff',
        padding: 12
    }
})