import React, { Component } from "react";
import authStore from "../../stores/authStore";
import profilesStore from "../../stores/profilesStore";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from "react-native";
import { observer } from "mobx-react";

class UpdateUserInfo extends Component {
  state = {
    id: this.props.navigation.getParam("userProfile").id,
    first_name: this.props.navigation.getParam("userProfile").first_name,
    last_name: this.props.navigation.getParam("userProfile").last_name,
    company_name: this.props.navigation.getParam("userProfile").company_name,
    email: this.props.navigation.getParam("userProfile").email,
    phone_number1: this.props.navigation.getParam("userProfile").phone_number1,
    phone_number2: this.props.navigation.getParam("userProfile").phone_number2,
    social_media: this.props.navigation.getParam("userProfile").social_media,
    profile_name: this.props.navigation.getParam("userProfile").profile_name
  };

  handleUpdate = () => {
    profilesStore.updateProfile(this.state, this.props.navigation);
    // this.props.navigation.navigate("MyProfile");
  };
  componentDidMount() {
    //console.log("hi", this.props.navigation.getParam("userProfile"));
  }

  render() {
    const {
      first_name,
      last_name,
      company_name,
      email,
      phone_number1,
      phone_number2,
      social_media,
      profile_name
    } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            value={first_name}
            style={styles.inputs}
            placeholder="first_name"
            underlineColorAndroid="transparent"
            onChangeText={first_name => this.setState({ first_name })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            value={last_name}
            style={styles.inputs}
            placeholder="last_name"
            underlineColorAndroid="transparent"
            onChangeText={last_name => this.setState({ last_name })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            value={company_name}
            style={styles.inputs}
            placeholder="company_name"
            underlineColorAndroid="transparent"
            onChangeText={company_name => this.setState({ company_name })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            value={email}
            style={styles.inputs}
            placeholder="email"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({ email })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            value={phone_number1}
            style={styles.inputs}
            placeholder="phone_number1"
            underlineColorAndroid="transparent"
            onChangeText={phone_number1 => this.setState({ phone_number1 })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            value={phone_number2}
            style={styles.inputs}
            placeholder="phone_number2"
            underlineColorAndroid="transparent"
            onChangeText={phone_number2 => this.setState({ phone_number2 })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            value={social_media}
            style={styles.inputs}
            placeholder="social_media"
            underlineColorAndroid="transparent"
            onChangeText={social_media => this.setState({ social_media })}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            value={profile_name}
            style={styles.inputs}
            placeholder="profile_name"
            underlineColorAndroid="transparent"
            onChangeText={profile_name => this.setState({ profile_name })}
          />
        </View>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.signupButton]}
          onPress={this.handleUpdate}
        >
          <Text style={styles.signUpText}>Update </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
export default observer(UpdateUserInfo);

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
