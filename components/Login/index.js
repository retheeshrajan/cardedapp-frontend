import React, { Component } from "react";
import { observer } from "mobx-react";

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
import authStore from "../../stores/authStore";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleLogin = () => {
    if (this.state.username && this.state.password) {
      authStore.loginUser(this.state, this.props.navigation);
    }
    // add an else statement to display a message if information is missing (update the value of authStore.signinMessage)
  };

  handleRegister = () => {
    this.props.navigation.navigate("Signup");
  };

  componentDidMount() {
    authStore.checkForToken(this.props.navigation);
  }

  render() {
    if (authStore.user) {
      this.props.navigation.navigate;
    }
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{
              uri: "https://png.icons8.com/message/ultraviolet/50/3498db"
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Username"
            underlineColorAndroid="transparent"
            onChangeText={username => this.setState({ username })}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{
              uri: "https://png.icons8.com/key-2/ultraviolet/50/3498db"
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({ password })}
          />
        </View>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={this.handleLogin}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.buttonContainer}
          onPress={this.handleRegister}
        >
          <Text>Register</Text>
        </TouchableHighlight>
        <Text>{authStore.signinmsg}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DCDCDC"
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
  loginButton: {
    backgroundColor: "#00b5ec"
  },
  loginText: {
    color: "white"
  }
});
export default observer(Login);
