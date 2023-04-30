import { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";

import styles from "./style";

interface Props {
  onCreateParticipant: Function
}

function ParticipantInput(props: Props) {
  const [ input, setInput ] = useState('');

  return (
    <View style={ styles.container }>
      <TextInput
        onChangeText={ text => setInput(text) }
        style={ styles.input }
        placeholder="Novo paticipante"
        placeholderTextColor="#6b6b6b"
      ></TextInput>
      <TouchableOpacity
        onPress={ () => props.onCreateParticipant(input) }
        style={ styles.button }
      >
        <Image style={ styles.btImage } source={ require("../../assets/icons/plus.png") }></Image>
      </TouchableOpacity>
    </View>
  );
}

export default ParticipantInput;