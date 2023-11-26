import ICON from "../../../constants/icon";
import COLOR from "../../../constants/color";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    gap: 10,
  },

  inputContainer: {
    gap: 5,
  },

  head: {
    fontSize: 23,
    fontFamily: "DMBold",
    textAlign: "center",
  },

  label: {
    fontSize: 17,
    fontFamily: "DMMedium",
  },

  input: {
    borderWidth: 0.8,
    borderRadius: 5,
    padding: 12,
    fontSize: 17,
    fontFamily: "DMRegular",
  },

  logout: {
    color: "red",
    fontFamily: "DMBold",
    borderTopWidth: 0.5,
    paddingVertical: 13,
    fontSize: 17,
  },

  save: {
    borderRadius: 5,
    padding: 12,
    fontFamily: "DMRegular",
    backgroundColor: COLOR.secondary,
  },
});

export default styles;
