import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Calculator from './Components/Calculator';
import styles from './styles/styles';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <Calculator />
      <StatusBar style="auto" />
    </View>
  );
}

