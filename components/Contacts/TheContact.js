import React, { Component } from "react";
import { ImageBackground, View } from "react-native";

// NativeBase Components
import {
  ListItem,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  ScrollView
} from "native-base";

// Style
import styles from "./styles";

// Navigation
import { withNavigation } from "react-navigation";

class TheContact extends Component {
  handlePress = () => {
    this.props.navigation.navigate("ContactDetails", {
      contactitem: this.props.contactitem.profile
    });
  };

  render() {
    const contactitem = this.props.contactitem.profile;
    console.log("COOO", contactitem);
    return (
      <>
        <View style={styles.thumbnail} />
        <ListItem button onPress={this.handlePress} style={styles.listitem}>
          <Card style={styles.transparent}>
            <CardItem style={styles.transparent}>
              <Left>
                <Text style={styles.text}>{contactitem.company_name}</Text>
              </Left>
            </CardItem>
          </Card>
        </ListItem>
      </>
    );
  }
}

export default withNavigation(TheContact);
