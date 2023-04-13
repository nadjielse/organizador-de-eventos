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
    <View>
      <Text>Participantes</Text>
      <FlatList
        data={ PARTICIPANTS }
        renderItem={ data => <Participant name={ data.item.name }></Participant> }
        keyExtractor={ data => data.id }
      ></FlatList>
    </View>
  );
}

export default ParticipantList;