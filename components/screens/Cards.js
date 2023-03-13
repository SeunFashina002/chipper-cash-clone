import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import styles from "../../styles";
import { Ionicons } from "@expo/vector-icons";

export const Card = ({bgColor, currency, symbol, acct_no, amount}) => {
  const chipper = require('../../assets/card_logo.png')
  const visa = require("../../assets/visa.png");
  return (
    <>
      <View style={{ ...styles.card, backgroundColor:bgColor}}>
        <View style={styles.cardHeader}>
          <View style={styles.cardHeaderLogoContainer}>
            <Image source={chipper} style={styles.cardHeaderLogo}></Image>
          </View>

          <Text style={{ color: "white", fontWeight: "700" }}>{currency}</Text>
        </View>

        <View style={styles.cardFooter}>
          <View>
            <Text style={{ color: "white" }}>Oluwaseun Fashina</Text>
            <Text style={{ color: "white" }}>{acct_no}</Text>
          </View>

          <View style={styles.cardFooterLogoContainer}>
            <Image style={styles.cardFooterLogo} source={visa}></Image>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity>
          <Text style={{ fontSize: 18, color: "#3b82f6", fontWeight: "600" }}>
            Show card details
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons
            name="information-circle-outline"
            size={32}
            color="#3b82f6"
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          marginTop: 16,
          paddingHorizontal: 24,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "800" }}>
          {" "}
          CURRENT BALANCE
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{ alignSelf: "flex-end", fontSize: 20, fontWeight: "700" }}
          >
            {symbol}
          </Text>
          <Text style={{ fontSize: 48, fontWeight: "700" }}>{amount}</Text>
        </View>
        <Text style={{ textAlign: "center", color: "gray", fontWeight: "500" }}>
          Fund your Chipper Card below using funds from your Chipper Wallet
        </Text>
      </View>
    </>
  );
};


