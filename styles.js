import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7e22ce",
  },

  subContainer: {
    backgroundColor: "#f1f5f9",
    height: "97%",
  },

  //home header styles

  homeHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },

  homeIcons: {
    flexDirection: "column",
    alignItems: "center",
  },

  myCashContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  myCash: {
    fontWeight: "900",
    color: "#312e81",
  },

  textStyle: {
    color: "#3b82f6",
  },

  // hero styling

  heroPaymentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 15,
  },
  heroPayment: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  heroPaymentIcon: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    width: 85,
    marginBottom: 7,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  // hero styling > updates styling
  updateContainer: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    height: "63%",
  },
  innerContainer: {
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  updateSubContainer: {
    flexDirection: "row",
    backgroundColor: "#312e81",
    padding: 15,
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },

  updatesImageContainer: {
    width: "28%",
    height: "70%",
  },
  updatesImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  updateTextContainer: {
    width: "68%",
    flexDirection: "column",
  },
  updateHeaderText: {
    fontSize: 18,
    marginVertical: 7,
    color: "#fff",
    fontWeight: "600",
  },
  updateDescriptionText: {
    color: "#e5e7eb",
    fontSize: 14,
    marginBottom: "auto",
  },

  //   Transactions Style
  transactionSubContainer: {
    flexDirection: "column",
    paddingVertical: 10,
    paddingHorizontal: 12,
    height: "100%",
    marginBottom: 10,
  },
  transactionInnerContainer: {
    flexDirection: "row",
    height: "100%",
    marginBottom: "auto",
    // borderWidth: 3,
  },

  transactionImgContainer: {
    width: "10%",
    height: "40%",
  },

  transactionImg: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  transactionActionContainer: {
    width: "65%",
    height: "50%",
    marginLeft: 10,
    marginRight: "auto",
    flexDirection: "column",
  },
  transactionAction: {
    width: "100%",
    fontWeight: "700",
    fontSize: 16,
  },

  // Cta style

  ctaContainer: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: "#fff",
    height: "9.4%",
  },

  ctaSubContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // borderWidth: 1,
    height: "100%",
  },

  ctaBtnContainer: {
    width: "48%",
    height: "100%",
    // borderWidth: 1,
  },

  ctaBtns: {
    width: "100%",
    height: "100%",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },

  // Referral Screen
  referralSubContainer: {
    // borderWidth: 2,
    paddingHorizontal: 4,
    width: "100%",
    height: 350,
    flexDirection: "column",
    alignItems: "center",
  },

  referralImageContainer: {
    width: "50%",
    height: "55%",
    marginVertical: 12,
  },

  referralImage: {
    width: "100%",
    height: "100%",
  },

  referralHeaderText: {
    fontWeight: "600",
    fontSize: 35,
    marginVertical: 20,
  },
  referralText: {
    textAlign: "center",
    fontSize: 17,
  },

  earnBtnsSubContainer: {
    // borderWidth: 2,
    width: "100%",
    height: 275,
    paddingHorizontal: 5,
    flexDirection: "column",
    justifyContent: "flex-end",
  },

  earnBtnsContainer: {
    width: "100%",
    height: "20%",
    // borderWidth: 1,
    marginVertical: 4,
  },

  earnBtns: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  // stock screen

  stockScreenImageContainer: {
    paddingHorizontal: 6,
    // borderWidth: 2,
    width: "100%",
    maxHeight: 350,
    height: "65%",
  },

  // stockScreenImageInnerContainer: {
  //   borderWidth: 2,
  //   width: "100%",
  //   height: "100%",
  // },

  stockScreenImage: {
    width: "100%",
    height: "100%",
    // borderWidth: 5,
  },

  // stock data
  stockDataContainer: {
    marginTop: 10,
    flexDirection: "column",
    // borderWidth: 1,
    // paddingLeft: 12,
  },
  stockData: {
    flexDirection: "row",
    // borderWidth: 1,
    height: 70,
    padding: 6,
    alignItems: "center",
    marginVertical: 4,
  },
  stockLogoContainer: {
    width: "10%",
    height: "70%",
    // borderWidth: 1,
    marginRight: 15,
  },
  stockLogo: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  stockTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    paddingVertical: 12,
    borderBottomWidth: 1,
    // borderWidth: 1,
    borderBottomColor: "#e5e7eb",
  },

  // cards screen styling
  cardToggleSwitchContainer: {
    flexDirection: "row",
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#f1f5f9",
    marginTop: 6,
  },

  cardToggleSwitch: {
    paddingVertical: 5,
    paddingHorizontal: 3,
    width: "50%",
    backgroundColor: "white",
    borderRadius: 7,
    shadowOffset: 6,
  },

  bgImgContainer: {
    width: "100%",
    height: "50%",
    marginTop: 5,
    marginBottom:'auto',
  },

  bgImg: {
    flex: 1,
    // justifyContent:"center",
  },

  card: {
    marginTop: 32,
    flexDirection: "column",
    backgroundColor: "black",
    width: "100%",
    paddingVertical: 6,
    paddingHorizontal: 12,
    height: "60%",
    borderRadius: 12,
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    marginBottom: "auto",
    // borderWidth: 1,
    // borderColor: "white",
  },
  cardHeaderLogoContainer: {
    width: "50%",
    height: "100%",
    marginRight: "auto",
  },
  cardHeaderLogo: {
    width: "100%",
    height: "100%",
  },

  cardFooter: {
    flexDirection: "row",
    alignItems: "flex-end",
    // borderWidth: 1,
    // borderColor: "white",
    height: "60%",
    marginBottom:12,
  },

  cardFooterLogoContainer: {
    width: "25%",
    height: "20%",
    marginLeft: "auto",
  },
  cardFooterLogo: {
    width: "100%",
    height: "100%",
  },
});




export default styles;
