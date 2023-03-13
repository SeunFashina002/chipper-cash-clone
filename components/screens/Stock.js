import { StocksDetails } from "./StocksDetails"
import { Text, View, SafeAreaView, Pressable, TouchableOpacity } from "react-native"
import List from "./Stock_Flatlist"
import styles from "../../styles";

export const StockScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <List />
      <View style={{ padding: 12, height:'10%'}}>
        <Pressable>
          <TouchableOpacity
            style={{ ...styles.ctaBtns, backgroundColor: "#7e22ce" }}
          >
            <Text style={{ fontWeight: "700", fontSize: 18, color: "#fff" }}>
              Search Stocks
            </Text>
          </TouchableOpacity>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
