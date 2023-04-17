import {
  View,
  Text,
  TouchableOpacity,
  Image
} from "react-native";

import styles from "./style";

interface ParticipantProps {
  name: string
}

function Participant({ name }: ParticipantProps) {
  return (
    <View style={ styles.container }>
      <Text style={ styles.name }>{ name }</Text>
      <TouchableOpacity style={ styles.button }>
        <Image style={ styles.btImage } source={ require("../../assets/icons/minus.png") }></Image>
      </TouchableOpacity>
    </View>
  )
}

export default Participant;