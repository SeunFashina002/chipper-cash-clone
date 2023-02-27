import { Cta } from "../Cta"
import List from "../Flat_list"
import { HomeHeader } from "../HomeHeader";
import { View } from "react-native";
import styles from "../../styles";
import { SafeAreaView } from "react-native";

export const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex:1}}>
        <HomeHeader />
        <List />
        <Cta />
    </SafeAreaView>
  );
};
