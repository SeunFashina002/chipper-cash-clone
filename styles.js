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
});

export default styles;
