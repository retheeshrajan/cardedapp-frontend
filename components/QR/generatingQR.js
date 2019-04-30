import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import QRCode from "react-native-qrcode";
import authStore from "../../stores/authStore";
import qrStore from "../../stores/QRStore";
import { observer } from "mobx-react";

class GenerateQR extends Component {
  state = {
    userInfoAPI: "",
    profileID: this.props.navigation.getParam("profileID")
  };

  componentDidMount() {
    // if (authStore.user) {
    //   //console.log("this is the userID", authStore.user);
    const { profileID } = this.state;

    qrStore.getUserData(profileID).then(() =>
      this.setState({
        // userInfoAPI: `http://192.168.100.198:80/userinfo/?id=${
        //   qrStore.userProfileID
        // }`

        userInfoAPI: `http://192.168.100.198:80/userinfo/?id=${
          qrStore.userProfileID
        }`
      })
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <QRCode
          value={this.state.userInfoAPI}
          size={200}
          bgColor="purple"
          fgColor="white"
        />
      </View>
    );
  }
}

export default observer(GenerateQR);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },

  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5
  }
});
