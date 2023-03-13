import {
  View,
  Text,
  SafeAreaView,
    TouchableOpacity,
  ImageBackground,
} from "react-native";
import styles from "../../styles";
import { Card } from "./Cards";
import { ReusableBtn } from "./EarnBtn";
import { useState } from "react";

export const CardScreen = () => {

    const [data, setData] = useState([
      {
        bgColor: "black",
        currency: "NGN",
        symbol: "₦",
        acct_no: "....4650",
        amount: "525, 000.00",
        ngn_bgColor: "white",
        usd_bgColor: "#f1f5f9",
      },
    ]);

    const setNgn = () => {
        setData((prevData) => {
            const new_data = { ...prevData[0], bgColor: "black", currency:"NGN", symbol:"₦", acct_no:'....4650', amount:"525, 000.00", ngn_bgColor:'white', usd_bgColor:"#f1f5f9"}
            return [new_data]
        })
    }

    const setUsd = () => {
        setData((prevData) => {
            const new_data = { ...prevData[0], bgColor: "#312e81", currency:"USD", symbol:"$", acct_no:'....2840', amount:'6,500.00', ngn_bgColor:'#f1f5f9', usd_bgColor:"white"}
            return [new_data]
        })
    }


    const bg_img = require("../../assets/worldmap.png");
    const {bgColor, currency, symbol, acct_no, amount, ngn_bgColor, usd_bgColor} = data[0]
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 16, paddingTop:16, paddingBottom:3, flexDirection:'column' }}>
      <View style={styles.cardToggleSwitchContainer}>
        <TouchableOpacity style={{...styles.cardToggleSwitch, backgroundColor:ngn_bgColor}} onPress={setNgn}>
          <Text style={{ textAlign: "center", fontWeight: "700" }}>
            NGN Card
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.cardToggleSwitch,
            backgroundColor: usd_bgColor,
          }}
          onPress={setUsd}
        >
          <Text style={{ textAlign: "center", fontWeight: "700" }}>
            USD Card
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bgImgContainer}>
        <ImageBackground
          source={bg_img}
          resizeMode="cover"
          style={styles.bgImg}
        >
                  <Card bgColor={bgColor} currency={currency} symbol={symbol} acct_no={acct_no} amount={amount} />
        </ImageBackground>
          </View>
          
        <View style={styles.earnBtnsSubContainer}>
          
          <ReusableBtn bgColor="" borderWidth={2} borderColor='#e5e7eb' label='Add Funds From Chipper Wallet' color="black"/>
          <ReusableBtn bgColor="" borderWidth={2} borderColor='#e5e7eb' label='Withdraw to Chipper Wallet' color="black" />
          <ReusableBtn bgColor="red" borderWidth={0} borderColor='' label='Freeze Card' color="#fff"/>
        </View>

    </SafeAreaView>
  );
};
