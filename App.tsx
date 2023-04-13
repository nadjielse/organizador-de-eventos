import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { Event } from "./src/screens";

function App() {
  return (
    <View>
      <Event />
      <StatusBar style="auto" />
    </View>
  );
}

export default App;