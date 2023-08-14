import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    position: "relative",
    flexDirection: "column",
    backgroundColor: "#1A1A1A",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100%",
    width: "100%",
  },
  logo: {
    marginTop: 70,
    marginBottom: 70,
    marginLeft: 132,
    marginRight: 132,
  },

  input: {
    color: "white",
    fontSize: 20,
    fontWeight: "100",
    backgroundColor: "#1F1E25",
    height: 56,
    width: 300,
    marginRight: 7,
    borderRadius: 5,
    padding: 10,
    "::placeholder": {
      color: "white",
      fontSize: 20,
      fontWeight: "100",
    },
  },

  inputText: {
    color: "#FFF",
    fontSize: 20,
  },

  button: {
    backgroundColor: "#1E6F9F",
    height: 56,
    width: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    position: "relative",
  },
  header: {
    width: "100%",
    height: 173,
    backgroundColor: "#0D0D0D",
  },
  participantsContainer: {
    width: "100%",
    position: "absolute",
    top: 150,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    zIndex: 1,
  },

  emptyList: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "100",
  },

  listBackground: {
    width: "100%",
    position: "absolute",
    bottom: -165,
    left: 0,
    right: 0,
    zIndex: -1,
    height: 812,
    backgroundColor: "#1A1A1A",
  },
  listContent: {
    width: "100%",
    height: 812,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  listHeader: {
    width: "100%",
    height: 173,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 30,
  },

  listHeaderTitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },

  listHeaderText: {
    color: "#4EA8DE",
  },
  listHeaderCreate: {
    color: "#4EA8DE",

    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 24,
  },
  listHeaderConclude: {
    color: "#8284FA",

    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 24,
  },
  listHeaderCounter: {
    display: "flex",
    paddingVertical: 2,
    paddingHorizontal: 8,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
    backgroundColor: "#333",
    fontSize: 12,
    color: "#FFF",
    fontWeight: "700",
  },
  divider: {
    width: "80%",
    height: 1,
    backgroundColor: "#1F1E25",
  },
  participantsList: {
    width: "100%",
    flexDirection: "column",
    padding: 5,
  },
});
