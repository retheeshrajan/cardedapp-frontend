import React, { Component } from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

// NativeBase Components
import { Text, Button, List, Container, Content } from "native-base";
import { StyleSheet } from "react-native";

// Store
import authStore from "../../stores/authStore";

class MainPage extends Component {
  componentDidMount() {
    if (!authStore.user) {
      console.log("user not logged in..");
      this.props.navigation.replace("Login");
    } else {
      console.log("user logged in..");
    }
  }

  handleQRCodeGen = () => {
    if (authStore.user) {
      console.log("Generating QR..");

      this.props.navigation.navigate("GenerateQR");
    }
  };

  handleContacts = () => {
    if (authStore.user) {
      console.log("Contacts..");

      this.props.navigation.navigate("Contacts");
    }
  };

  handleLogout = () => {
    console.log("Logout....");
    if (authStore.user) {
      authStore.logout(this.props.navigation);
    }
  };

  handleBarCodeScanner = () => {
    this.props.navigation.navigate("BarCodeScanner");
  };

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Button block warning onPress={this.handleQRCodeGen}>
            <Text>Generate QRCode</Text>
          </Button>
          <Button block info onPress={this.handleBarCodeScanner}>
            <Text>Scan QRCode</Text>
          </Button>
          {/* <Button block info onPress={this.handleContacts}>
            <Text>Contacts</Text>
          </Button> */}
          <Button block danger onPress={this.handleLogout}>
            <Text>Logout</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "row",
    padding: 20,
    marginTop: 100,
    alignContent: "center"
  }
});

export default withNavigation(observer(MainPage));
