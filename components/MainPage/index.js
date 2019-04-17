import React, { Component } from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

// NativeBase Components
import { Text, Button, List, Container, Content } from "native-base";
import { StyleSheet } from "react-native";

// Store
import authStore from "../../stores/authStore";

class MainPage extends Component {
  handleProfile = () => {
    if (authStore.user) {
      console.log("Profile..");
      this.props.navigation.navigate("GenerateQR");
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
          <Button block warning onPress={this.handleProfile}>
            <Text>View Profile</Text>
          </Button>
          <Button block info onPress={this.handleBarCodeScanner}>
            <Text>View My Contacts</Text>
          </Button>
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
