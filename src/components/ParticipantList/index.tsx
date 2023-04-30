import {
  View,
  Text,
  FlatList
} from "react-native";

import Participant from "../Participant";

import styles from "./style";

interface Props {
  onRemoveParticipant: Function,
  participants: Array<{ id: string, name: string }>
}

function ParticipantList(props: Props) {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Participantes</Text>
      <FlatList
        data={ props.participants }
        renderItem={ data => <Participant onRemoveParticipant={ () => props.onRemoveParticipant(data.item.id) } name={ data.item.name }></Participant> }
        keyExtractor={ data => data.id }
        ListEmptyComponent={ (
          <View style={ styles.txView }>
            <Text style={ styles.text }>Ninguém chegou no evento ainda?</Text>
            <Text style={ styles.text }>Adicione participantes a sua lista de presença.</Text>
          </View>
        ) }
      ></FlatList>
    </View>
  );
}

export default ParticipantList;