import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CalculatorInput from './Components/Calculator';

export default function App() {
  return (
    <View style={styles.container}>
      <CalculatorInput />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bbeaff",
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
