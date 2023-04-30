import { useState } from "react";
import { View } from "react-native";

import {
  Header,
  ParticipantInput,
  ParticipantList
} from "../../components";

import styles from "./style";

interface Participant {
  id: string,
  name: string
}

function Event() {
  const [ participants, setParticipants ] = useState(new Array<Participant>());

  function onCreateParticipant(name: string) {
    setParticipants([ ...participants, {
      id: (
        participants.length ?
        participants[participants.length - 1].id + 1 :
        1
      ).toString(),
      name
    } ]);
  }
  
  function onRemoveParticipant(id: string) {
    setParticipants(participants.filter(p => p.id !== id));
  }

  return (
    <View>
      <Header />
      <ParticipantInput onCreateParticipant={ onCreateParticipant } />
      <ParticipantList onRemoveParticipant={ onRemoveParticipant } participants={ participants }/>
    </View>
  );
}

export default Event;