import { View, Text, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import { mock_transaction } from "../data/transactionsData";
import styles from "../styles";



export const Transactions = () => {
  const img = require("../assets/goat.png");
  const img_chipper = require("../assets/chipper_logo.png");

  let [data] = useState(mock_transaction)
  const UserTransactions = data.map((item, index) => {
    return (
      <TouchableOpacity
        key={index}
        style={{ height: 120, backgroundColor: "#fff", marginBottom: 10 }}
      >
        <View style={styles.transactionSubContainer}>
          <View style={styles.transactionInnerContainer}>
            <View style={styles.transactionImgContainer}>
              <Image
                source={item.type == "refund" ? img_chipper : img}
                style={styles.transactionImg}
              />
            </View>

            <View style={styles.transactionActionContainer}>
              <Text style={styles.transactionAction}>{item.action}</Text>
              <Text style={{ color: "#71717a" }}>{item.time}</Text>
            </View>

            <Text
              style={
                item.type == "refund" || item.type == "credit"
                  ? { color: "#16a34a", height: "50%" }
                  : { color: "#18181b", height: "50%" }
              }
            >
              {item.amount}
            </Text>
          </View>

          {item.type == "airtime" ? (
            <Text>
              Sent {item.credit_amount} worth of airtime to {item.mob_no}. You
              saved {item.saved}
            </Text>
          ) : (
            <Text>{item.message}</Text>
          )}
        </View>
      </TouchableOpacity>
    );
  })

  
  return (
    <View style={styles.transactionContainer}>
      {UserTransactions}
    </View>
  );
};
