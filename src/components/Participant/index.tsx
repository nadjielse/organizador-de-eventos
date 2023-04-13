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
    <View>
      <Text>{ name }</Text>
      <TouchableOpacity>
        <Image source={ require("../../assets/icons/minus.svg") }></Image>
      </TouchableOpacity>
    </View>
  )
}

export default Participant;