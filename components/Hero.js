import { View, Text, TouchableOpacity } from "react-native";
import { Updates } from "./Updates";
import { DATA } from "../data/heroData";
import styles from "../styles";

export const Hero = () => {
  return (
    <View style={{ padding: 12 }}>
      <View style={styles.heroPaymentContainer}>
        {DATA.map((item, index) => {
          return (
            <TouchableOpacity key={index} style={styles.heroPayment}>
              <View
                style={{
                  ...styles.heroPaymentIcon,
                  backgroundColor: item.bgColor,
                }}
              >
                {item.icon}
              </View>
              <Text style={{ color: "#71717a" }}>{item.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.updateContainer}>
        <Updates />
      </View>
    </View>
  );
};
