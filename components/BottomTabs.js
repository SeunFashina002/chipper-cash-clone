import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ReferralScreen } from "./screens/Referral";
import { StockScreen } from "./screens/Stock";
import { CardScreen } from "./screens/CardScreen";
import { HomeScreen } from "./screens/Home";


import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";


const Tab = createBottomTabNavigator();

export const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#d8b4fe",
        showLabel: true,
        tabBarStyle: { backgroundColor: "#7e22ce" },
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="ReferralScreen"
        component={ReferralScreen}
        options={{
          tabBarLabel: "Earn",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cash-100" size={32} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="StockScreen"
        component={StockScreen}
        options={{
          tabBarLabel: "Invest",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bitcoin" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="CardScreen"
        component={CardScreen}
        options={{
          tabBarLabel: "Cards",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="creditcard" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
