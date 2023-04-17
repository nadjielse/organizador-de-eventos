import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6.25
  },
  
  name: {
    width: "100%",
    height: 50,
    paddingHorizontal: 16,
    fontSize: 16,
    textAlignVertical: "center",
    color: "#ffffff",
    borderRadius: 5,
    backgroundColor: "#1F1E25"
  },

  button: {
    position: "absolute",
    right: 0,
    borderRadius: 5,
    backgroundColor: "#E23C44"
  },
  
  btImage: {
    width: 25,
    height: 25,
    margin: 12.5
  }

});

export default styles;