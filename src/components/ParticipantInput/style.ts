import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    marginVertical: 25
  },

  input: {
    fontSize: 14,
    textAlignVertical: "center",
    height: 50,
    width: 320,
    paddingHorizontal: 7,
    borderRadius: 5,
    color: "#ffffff",
    backgroundColor: "#1F1E25"
  },

  button: {
    width: 50,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#31CF67"
  },

  btImage: {
    width: 25,
    height: 25,
    margin: 12.5
  }

});

export default styles;