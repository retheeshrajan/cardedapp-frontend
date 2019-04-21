import React, { Component } from "react";
import { BarCodeScanner, Permissions } from "expo";
import { StyleSheet, Text, View } from "react-native";
import qrStore from "../../stores/QRStore";
import Axios from "axios";

class CodeScanner extends Component {
  state = {
    hasCameraPermission: ""
  };

  async componentDidMount() {
    const permission = await Permissions.getAsync(
      //   Permissions.CAMERA_ROLL,
      Permissions.CAMERA
    );
    if (permission.status !== "granted") {
      const NewPermission = await Permissions.AskAsync(
        // Permissions.CAMERA_ROLL,
        Permissions.CAMERA
      );
      if (NewPermission.status === "granted") {
        this.setState({ hasCameraPermission: Permission === "granted" });
      }
    }
  }

  handleBarCodeScanned = ({ type, data }) => {
    console.log(data);
    qrStore.getUserInfoScan(data);
    // alert(`${data} has been scanned!`);

    const userInfo = qrStore.user;
    if (userInfo) {
      this.props.navigation.navigate("RecivedUserInfo", { userInfo: userInfo });
    }
  };

  //     if (qrStore.userInfoID) {
  //       qrStore.getUserInfo(qrStore.userInfoID);
  //     alert("yay");
  //     }
  //   };
  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={{ flex: 1 }}>
        <BarCodeScanner
          onBarCodeScanned={this.handleBarCodeScanned}
          style={StyleSheet.absoluteFill}
        />
      </View>
    );
  }
}

export default CodeScanner;
