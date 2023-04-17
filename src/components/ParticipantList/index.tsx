import {
  View,
  Text,
  FlatList
} from "react-native";

import Participant from "../Participant";

import styles from "./style";

// Placeholder participants data
const PARTICIPANTS = [
  {
    id: '1',
    name: "Daniel"
  },
  {
    id: '2',
    name: "David"
  },
  {
    id: '3',
    name: "Fábio"
  }
];

function ParticipantList() {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Participantes</Text>
      <FlatList
        data={ PARTICIPANTS }
        renderItem={ data => <Participant name={ data.item.name }></Participant> }
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