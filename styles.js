import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7e22ce",
  },

  subContainer: {
    backgroundColor: "#f1f5f9",
    marginTop: 30,
    height: "90%",
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
    color: "#1e3a8a",
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
    height: "45%",
  },
  innerContainer: {
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  updateSubContainer: {
    flexDirection: "row",
    backgroundColor: "#1e3a8a",
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
});

export default styles;
