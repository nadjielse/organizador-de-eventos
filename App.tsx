import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import Constants from "expo-constants";

import { Event } from "./src/screens";

function App() {
  return (
    <View style={ styles.body }>
      <Event />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 12.5,
    backgroundColor: "#131016"
  }
})

export default App;