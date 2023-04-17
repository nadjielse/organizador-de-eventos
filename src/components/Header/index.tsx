import {
  View,
  Text,
} from "react-native";

import styles from "./style";

function Header() {
  return (
    <View style={ styles.header }>
      <Text style={ styles.name }>Nome do Evento</Text>
      <Text style={ styles.date }>Data do Evento</Text>
    </View>
  );
}

export default Header;