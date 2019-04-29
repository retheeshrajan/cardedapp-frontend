import React, { Component } from "react";
import authStore from "../../stores/authStore";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from "react-native";
import { observer } from "mobx-react";
import qrStore from "../../stores/QRStore";

class UserInfo extends Component {
  state = {
    name: "",
    company_name: "",
    email: "",
    phone_number1: "",
    phone_number2: "",
    social_media: "",
    profile_name: "",
    phone_number: ""
  };

  handleCreateInfo = () => {
    console.log("begin update userinfo..");
    if (authStore.user) {
      // userInfoID = qrStore.userInfoID;
      console.log("calling updateuserInfo...");
      authStore.CreateProfile(this.state, this.props.navigation);
      console.log("end updateuserInfo...");
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="name"
            underlineColorAndroid="transparent"
            onChangeText={name => this.setState({ name })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="company_name"
            underlineColorAndroid="transparent"
            onChangeText={company_name => this.setState({ company_name })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="email"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({ email })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="phone_number1"
            underlineColorAndroid="transparent"
            onChangeText={phone_number1 => this.setState({ phone_number1 })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="phone_number2"
            underlineColorAndroid="transparent"
            onChangeText={phone_number2 => this.setState({ phone_number2 })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="social_media"
            underlineColorAndroid="transparent"
            onChangeText={social_media => this.setState({ social_media })}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="profile_name"
            underlineColorAndroid="transparent"
            onChangeText={profile_name => this.setState({ profile_name })}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="phone_number"
            underlineColorAndroid="transparent"
            onChangeText={phone_number => this.setState({ phone_number })}
          />
        </View>
        <TouchableHighlight
          style={[styles.buttonContainer, styles.signupButton]}
          onPress={this.handleCreateInfo}
        >
          <Text style={styles.signUpText}>Create Profile Info</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00b5ec"
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center"
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30
  },
  signupButton: {
    backgroundColor: "#FF4DFF"
  },
  signUpText: {
    color: "white"
  }
});
export default observer(UserInfo);
