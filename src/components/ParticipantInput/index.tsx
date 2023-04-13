import {
  View,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";

import styles from "./style";

function ParticipantInput() {
  return (
    <View>
      <TextInput placeholder="Novo paticipante"></TextInput>
      <TouchableOpacity>
        <Image source={ require("../../assets/icons/plus.svg") }></Image>
      </TouchableOpacity>
    </View>
  );
}

export default ParticipantInput;