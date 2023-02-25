import { View, Text, Pressable, Image } from "react-native";
import styles from "../styles";

export const Updates = () => {
  const image = require("../assets/img2.jpg");
  const btnLabel = "GET STARTED>";
  return (
    <View style={styles.innerContainer}>
      <View style={styles.updateSubContainer}>
        <View style={styles.updatesImageContainer}>
          <Image source={image} style={styles.updatesImage} />
        </View>
        <View style={styles.updateTextContainer}>
          <Text style={styles.updateHeaderText}>
            Recieve Money From the US 💸
          </Text>
          <Text style={styles.updateDescriptionText}>
            Recieve money from friends & family in the US. It's instant!
          </Text>
          <Pressable>
            <Text style={{ color: "#86efac", fontWeight: "600" }}>
              {btnLabel}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
