import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 12,
    marginHorizontal: 20,
    marginTop: 5,
    flexDirection: "row",
    borderRadius: 8,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#262626",
    boxShadow: "0px 2px 8px 0px rgba(0, 0, 0,  0.06)",
    gap: 10,
  },
  nome: {
    color: "#F2F2F2",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    flex: 1,
  },

  nomeRiscado: {
    color: "#808080",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 19,
    //font strike through
    textDecorationLine: "line-through",
  },
  subtitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "100",
  },

  button: {
    backgroundColor: "none",
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
