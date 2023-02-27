import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import styles from './styles'
import { HomeScreen } from './components/screens/Home'
import { MyTabs } from './components/BottomTabs'
import { NavigationContainer } from "@react-navigation/native"

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}></View>
      <View style={styles.subContainer}>
        <MyTabs/>
        </View>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}


