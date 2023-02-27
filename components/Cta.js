import { View, Text, TouchableOpacity, Pressable } from "react-native";
import styles from "../styles";

export const Cta = () => {
    return (
      <View style={styles.ctaContainer}>
        <View style={styles.ctaSubContainer}>

        <Pressable style={styles.ctaBtnContainer}>
        <TouchableOpacity style={{...styles.ctaBtns, borderWidth:2, borderColor: "#e5e7eb"}}>
                <Text style={{fontWeight:'700', fontSize:18}}>Request</Text>
        </TouchableOpacity>
        </Pressable>
                
        <Pressable style={styles.ctaBtnContainer}>
        <TouchableOpacity style={{ ...styles.ctaBtns, backgroundColor: "#7e22ce" }}>
            <Text style={{ fontWeight: "700", fontSize: 18, color: "#fff" }}>Send</Text>
        </TouchableOpacity>
        </Pressable>
        </View>
      </View>
    );
}

