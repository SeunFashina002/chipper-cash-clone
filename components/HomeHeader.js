import { View, Text } from "react-native"
import { TouchableOpacity } from "react-native"
import styles from "../styles";

// icons
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";


export const HomeHeader = () => {
    return (
      <View style={styles.homeHeaderContainer}>
        <TouchableOpacity style={styles.homeIcons}>
          <AntDesign name="questioncircleo" size={30} color="#3b82f6" />
          <Text style={styles.textStyle}>Help</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.myCashContainer}>
          <Text style={styles.myCash}>My Cash</Text>
          <Entypo name="chevron-small-down" size={24} style={styles.myCash} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.homeIcons}>
          <Feather name="user" size={30} color="#3b82f6" />
          <Text style={styles.textStyle}>Profile</Text>
        </TouchableOpacity>
      </View>
    );
}