import React, { Component } from "react";
import { Text } from "react-native";
import { Font, AppLoading } from "expo";
import AppContainer from "./navigation/appContainer";

export default class App extends React.Component {
  state = { loading: true };

  async componentDidMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) return <Text>Loading....</Text>;
    return <AppContainer />;
  }
}
