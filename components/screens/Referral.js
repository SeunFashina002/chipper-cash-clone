import { View, Text, SafeAreaView, Image } from "react-native"
import styles from "../../styles"
import { ReusableBtn } from "./EarnBtn"

export const ReferralScreen = () => {
  const img = require('../../assets/gift_.png')
    return (
      <SafeAreaView
        style={{
          flex: 1,
          padding: 12,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <View style={styles.referralSubContainer}>
          <View style={styles.referralImageContainer}>
            <Image source={img} style={styles.referralImage} />
          </View>
          <Text style={styles.referralHeaderText}>Invite friends and Earn</Text>
          <Text style={styles.referralText}>
            Invite your friends in the US and earn
            <Text style={{ fontWeight: "800" }}> ₦4,000.00 </Text>
            when they send at least $30 to an African country💖💞🧡😍
          </Text>
        </View>

        <View style={styles.earnBtnsSubContainer}>
          <ReusableBtn bgColor="#7e22ce" borderWidth={0} borderColor='' label='Invite a Friend' color="#fff"/>
          <ReusableBtn bgColor="" borderWidth={2} borderColor='#e5e7eb' label='Enter Referral Code' color="black"/>
          <ReusableBtn bgColor="" borderWidth={2} borderColor='#e5e7eb' label='View Referral History' color="black" />
          <ReusableBtn bgColor="" borderWidth={0} borderColor='' label='View Terms and Conditions' color="#7e22ce"/>
        </View>
      </SafeAreaView>
    );
}

