import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.boldText}>Hello world</Text>
      </View>

      <View style={styles.body}>
        <Text>lorem ipsum dolor sit amet.</Text>
        <Text>lorem ipsum dolor sit amet.</Text>
        <Text>lorem ipsum dolor sit amet.</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },

  boldText: {
    fontWeight: 'bold'
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  body: {
    backgroundColor: 'yellow',
    padding: 20
  }
});
