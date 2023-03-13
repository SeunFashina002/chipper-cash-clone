import { SafeAreaView, Image, View, Text, TouchableOpacity, Pressable} from "react-native";
import styles from "../../styles";
import { Entypo } from "@expo/vector-icons";
import { DATA } from "../../data/stockData";

export const StocksDetails = () => {
  const img = require('../../assets/bitcoin.png')
  const adobe = require('../../assets/adobe.png')
  return (
    <View style={{ padding: 12 }}>
      <View style={{ padding: 6 }}>
        <Text style={{ fontSize: 30, fontWeight: "800" }}>
          Build your Portfolio
        </Text>
        <Text style={{ fontSize: 18, marginVertical: 10 }}>
          Buy your first stock with as little as $1 (approx. ₦460.47)
        </Text>
      </View>

      <View style={styles.stockScreenImageContainer}>
        {/* <View style={styles.stockScreenImageInnerContainer}> */}
        <Image source={img} style={styles.stockScreenImage} />
        {/* </View> */}
      </View>

      <View style={{ paddingHorizontal: 6 }}>
        <Text style={{ fontSize: 30, fontWeight: "800" }}>Most Popular</Text>

        <Text style={{ fontSize: 18, marginVertical: 10 }}>
          The most commonly traded stocks in the Chipper community
        </Text>
      </View>

      <View style={styles.stockDataContainer}>
        {DATA.map((item, index) => {
          return (
            <TouchableOpacity style={styles.stockData} key={index}>
              <View style={styles.stockLogoContainer}>
                <Image style={styles.stockLogo} source={item.img} />
              </View>

              <View style={styles.stockTextContainer}>
                <Text style={{ marginRight: "auto", fontSize: 17 }}>
                  {item.company}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingRight: 16,
                  }}
                >
                  <Text style={{ fontWeight: "800", fontSize: 17 }}>
                    
                    {item.price}
                  </Text>
                  <Pressable style={{ fontWeight: "bold" }}>
                    <Entypo
                      name="chevron-small-right"
                      size={36}
                      color="black"
                    />
                  </Pressable>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

      // <View style={{ padding: 12, height: "65%" }}>
      //   <View style={{ padding: 6 }}>
      //     <Text style={{ fontSize: 30, fontWeight: "800" }}>
      //       Build your Portfolio
      //     </Text>

      //     <Text style={{ fontSize: 18, marginVertical: 10 }}>
      //       Buy your first stock with as little as $1 (approx. ₦460.47)
      //     </Text>
      //   </View>

        // <View style={styles.stockScreenImageContainer}>
        //   {/* <View style={styles.stockScreenImageInnerContainer}> */}
        //   <Image source={img} style={styles.stockScreenImage} />
        //   {/* </View> */}
        // </View>

        // <View style={{ paddingHorizontal: 6 }}>
        //   <Text style={{ fontSize: 30, fontWeight: "800" }}>Most Popular</Text>

        //   <Text style={{ fontSize: 18, marginTop: 10 }}>
        //     The most commonly traded stocks in the Chipper community
        //   </Text>
        // </View>
      // </View>

      // <View style={styles.stockDataContainer}>
      //   <TouchableOpacity style={styles.stockData}>
      //     <View style={styles.stockLogoContainer}>
      //       <Image style={styles.stockLogo} source={adobe} />
      //     </View>

      //     <View style={styles.stockTextContainer}>
      //       <Text style={{ marginRight: "auto", fontSize: 17 }}>
      //         Adobe Systems Inc.
      //       </Text>
      //       <View
      //         style={{
      //           flexDirection: "row",
      //           alignItems: "center",
      //           paddingRight: 16,
      //         }}
      //       >
      //         <Text style={{ fontWeight: "800", fontSize: 17 }}> $344.95 </Text>
      //         <Pressable style={{ fontWeight: "bold" }}>
      //           <Entypo name="chevron-small-right" size={36} color="black" />
      //         </Pressable>
      //       </View>
      //     </View>
      //   </TouchableOpacity>

      //   <TouchableOpacity style={styles.stockData}>
      //     <View style={styles.stockLogoContainer}>
      //       <Image style={styles.stockLogo} source={adobe} />
      //     </View>

      //     <View style={styles.stockTextContainer}>
      //       <Text style={{ marginRight: "auto", fontSize: 17 }}>
      //         Adobe Systems Inc.
      //       </Text>
      //       <View
      //         style={{
      //           flexDirection: "row",
      //           alignItems: "center",
      //           paddingRight: 16,
      //         }}
      //       >
      //         <Text style={{ fontWeight: "800", fontSize: 17 }}> $344.95 </Text>
      //         <Pressable style={{ fontWeight: "bold" }}>
      //           <Entypo name="chevron-small-right" size={36} color="black" />
      //         </Pressable>
      //       </View>
      //     </View>
      //   </TouchableOpacity>
      // </View>