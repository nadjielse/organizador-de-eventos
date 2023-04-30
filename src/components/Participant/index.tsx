import {
  View,
  Text,
  TouchableOpacity,
  Image
} from "react-native";

import styles from "./style";

interface Props {
  name: string,
  onRemoveParticipant: Function,
}

function Participant(props: Props) {
  return (
    <View style={ styles.container }>
      <Text style={ styles.name }>{ props.name }</Text>
      <TouchableOpacity
        onPress={ () => props.onRemoveParticipant() }
        style={ styles.button }
      >
        <Image style={ styles.btImage } source={ require("../../assets/icons/minus.png") }></Image>
      </TouchableOpacity>
    </View>
  )
}

export default Participant;