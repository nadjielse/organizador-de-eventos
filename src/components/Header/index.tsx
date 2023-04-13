import {
  View,
  Text,
} from "react-native";

import styles from "./style";

function Header() {
  return (
    <View>
      <Text>Nome do Evento</Text>
      <Text>Data do Evento</Text>
    </View>
  );
}

export default Header;