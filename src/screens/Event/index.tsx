import { View } from "react-native";

import {
  Header,
  ParticipantInput,
  ParticipantList
} from "../../components";

import styles from "./style";

function Event() {
  return (
    <View>
      <Header />
      <ParticipantInput />
      <ParticipantList />
    </View>
  );
}

export default Event;