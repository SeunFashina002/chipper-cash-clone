// icons import 
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"
import { FontAwesome5 } from "@expo/vector-icons"

import styles from "../styles";

export const DATA = [
  {
    title: "Add Cash",
    bgColor: "#3b82f6",
    icon: (
      <MaterialCommunityIcons name="cash-multiple" size={40} color="white"/>
    ),
  },

  {
    title: "Buy Airtime",
    bgColor: "#16a34a",
    icon: (
      <MaterialIcons name="phone-iphone" size={40} color="white"  />
    ),
  },

  {
    title: "Data Bundle",
    bgColor: "#f59e0b",
    icon: (
      <MaterialCommunityIcons name="access-point" size={40} color="white"/>
    ),
  },
  {
    title: "Pay Bills",
    bgColor: "#db2777",
    icon: (
      <FontAwesome5 name="receipt" size={40} color="white"/>
    ),
  },
];

