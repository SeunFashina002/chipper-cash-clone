import { Pressable, TouchableOpacity, Text } from "react-native"
import styles from "../../styles"


export const ReusableBtn = ({ bgColor, borderWidth, borderColor, label, color}) => {
    return (
        <Pressable style={styles.earnBtnsContainer}>
            <TouchableOpacity
            style={{ ...styles.earnBtns, borderWidth: borderWidth, borderColor: borderColor, backgroundColor:bgColor }}
            >
                <Text style={{ fontWeight: "700", fontSize: 18, color:color}}>{label}</Text>
            </TouchableOpacity>
        </Pressable>
    )
}
