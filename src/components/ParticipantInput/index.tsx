import {
  View,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";

import styles from "./style";

function ParticipantInput() {
  return (
    <View style={ styles.container }>
      <TextInput style={ styles.input } placeholder="Novo paticipante" placeholderTextColor="#6b6b6b"></TextInput>
      <TouchableOpacity style={ styles.button }>
        <Image style={ styles.btImage } source={ require("../../assets/icons/plus.png") }></Image>
      </TouchableOpacity>
    </View>
  );
}

export default ParticipantInput;