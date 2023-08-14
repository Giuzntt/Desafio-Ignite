import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginTop: 5,
    flexDirection: "row",
    borderRadius: 5,
    alignItems: "center",
    backgroundColor: "#1F1E25",
  },
  nome: {
    color: "white",
    fontSize: 30,
    flex: 1,
    textAlign: "left",
  },
  subtitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "100",
  },

  button: {
    backgroundColor: "red",
    height: 56,
    width: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  textButton: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
});
