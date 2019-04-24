import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "blue",
    fontSize: 18,
    fontWeight: "bold",
    opacity: 1,
    textAlign: "center",
  },
  divider: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  overlay: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,

    opacity: 0.5,
    backgroundColor: "black",
    height: "100%",
    width: "100%",
  },
  listitem: {
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    height: 180,
    flexDirection: "row",
  },
  transparent: {
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    flexDirection: "row",
  },
  thumbnail: {
    backgroundColor: "white",
    opacity: 1,
  },
  background: {
    width: null,
    flex: 1,
  },
  adddir: {
    borderWidth: 1,
    borderColor: "#dd5566",
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 70,
    backgroundColor: "#fda",
    borderRadius: 50,
  },
  imageContainer: {
    height: 128,
    width: 128,
    borderRadius: 64,
  },
  image: {
    height: 128,
    width: 128,
    borderRadius: 64,
  },
  msgbtn: {
    borderWidth: 1,
    borderColor: "#55dd66",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    backgroundColor: "#dfa",
    color: "#111",
    borderRadius: 30,
  },
  telbtn: {
    borderWidth: 1,
    borderColor: "#5566dd",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    backgroundColor: "#fad",
    borderRadius: 30,
  },
  listitem: {
    borderWidth: 1,
    borderColor: "#335566",
  },
});
export default styles;
