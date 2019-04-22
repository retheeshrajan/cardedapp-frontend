import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import QRCode from "react-native-qrcode";
import authStore from "../../stores/authStore";
import qrStore from "../../stores/QRStore";
import { observer } from "mobx-react";

class GenerateQR extends Component {
  state = {
    userInfoAPI: ""
  };

  componentDidMount() {
    if (authStore.user) {
      console.log(authStore.user);
      const userID = authStore.user.user_id;

      // qrStore.getUserData(userID);

      // this.setState({
      //   userInfoAPI: `http://192.168.8.102:80/get/userInfo/${
      //     qrStore.userInfoID
      //   }/`
      // });

      // console.log("this is userInfoID", qrStore.userInfoID);

      qrStore.getUserData(userID).then(() =>
        this.setState(
          {
            userInfoAPI: `http://192.168.8.102:80/get/userInfo/${
              qrStore.userInfoID
            }/`
          },
          () => console.log(this.state.userInfoAPI)
        )
      );
    }
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
