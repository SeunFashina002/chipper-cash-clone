import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import styles from './styles';
import { HomeHeader } from './components/HomeHeader';
import { Hero } from './components/Hero';
import { Transactions } from './components/Transactions';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <HomeHeader />
        <Hero />
        <Transactions/>
      </View>
      <StatusBar style="light" />
    </View>
  );
}
