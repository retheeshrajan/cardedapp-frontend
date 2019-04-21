import React, { Component } from "react";
import { observer } from "mobx-react";
import { ScrollView, View } from "react-native";

// NativeBase Components
import { List, Content } from "native-base";

// Store
import contactStore from "../../stores/ContactsStore";
import authStore from "../../stores/authStore";

import TheContact from "./TheContact";

class Contacts extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "My contact list",
    headerLeft: null,
    headerStyle: { backgroundColor: "#6cc" },
  });

  componentDidMount() {
    if (authStore.user) {
      contactStore.getContacts();
    }
  }

  render() {
    const contacts = contactStore.contacts;
    let myContacts;
    if (contacts) {
      myContacts = contacts.map(item => (
        <TheContact contactitem={item} key={item.friends.username} />
      ));
    }
    return (
      <Content>
        <View>
          <ScrollView>
            <List>{myContacts}</List>
          </ScrollView>
        </View>
      </Content>
    );
  }
}

export default observer(Contacts);
