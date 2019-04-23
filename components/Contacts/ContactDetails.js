import React, { Component } from "react";
import { observer } from "mobx-react";
import { Contacts } from "expo";

// NativeBase Components
import {
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Picker,
  Content,
} from "native-base";

// Style
import styles from "./styles";

// Store
import contactStore from "../../stores/ContactsStore";
import authStore from "../../stores/authStore";

class ContactDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("contactitem", {}).name,
    headerStyle: { backgroundColor: "#28e" },
  });

  // state = {
  //   FirstName: "",
  //   // LastName: "",
  //   Company: "",
  //   email: "",
  //   phoneNumberhome: "",
  //   phoneNumbermobile: "",
  //   url: "",
  // };

  // componentDidMount() {
  //   this.setState(
  //     { FirstName: contactitem.friends.userinfo.name },
  //     { Company: contactitem.friends.userinfo.company_name },
  //     { email: contactitem.friends.userinfo.email },
  //     { phoneNumberhome: contactitem.friends.userinfo.phone_number1 },
  //     { phoneNumbermobile: contactitem.friends.userinfo.phone_number2 },
  //     { url: contactitem.friends.userinfo.social_media }
  //   );
  // }

  addtoContacts = async () => {
    try {
      if (authStore.user) {
        const contact = {
          [Contacts.Fields.FirstName]: contactitem.friends.userinfo.name,
          // [Contacts.Fields.LastName]: this.state.LastName,
          [Contacts.Fields.Company]: contactitem.friends.userinfo.company_name,
          [Contacts.Fields.Emails]: [
            { label: "emails", number: contactitem.friends.userinfo.email },
          ],
          [Contacts.Fields.PhoneNumbers]: [
            {
              label: "home",
              number: contactitem.friends.userinfo.phone_number1,
            },
            {
              label: "mobile",
              number: contactitem.friends.userinfo.phone_number2,
            },
          ],
          [Contacts.Fields.UrlAddresses]: [
            {
              label: "urlAddresses",
              number: contactitem.friends.userinfo.social_media,
            },
          ],
        };
        const contactId = await Contacts.addContactAsync(contact);
        console.log("contactid: ", contactId);
      }

      // console.log("Fields: ", Contacts.Fields);
    } catch (err) {
      console.log(err);
    }
  };

  // handleAdd = () => {
  //   if (authStore.user) {
  //     console.log("Adding to directory begins..");
  //   } else {
  //     console.log("user - need login to add item");
  //     this.props.navigation.navigate("Login");
  //   }
  // };

  render() {
    const contactitem = this.props.navigation.getParam("contactitem", {});
    return (
      <Content>
        <List>
          <ListItem style={styles.center}>
            <Left>
              <Text style={styles.text}>
                {contactitem.friends.username + "\n"}
              </Text>
            </Left>
          </ListItem>

          <ListItem style={styles.center}>
            <Left>
              <Text>{contactitem.friends.userinfo.name}</Text>
            </Left>
          </ListItem>

          <ListItem style={styles.center}>
            <Left>
              <Text>{contactitem.friends.userinfo.company_name}</Text>
            </Left>
          </ListItem>

          <ListItem style={styles.center}>
            <Left>
              <Text>{contactitem.friends.userinfo.email}</Text>
            </Left>
          </ListItem>

          <ListItem style={styles.center}>
            <Left>
              <Text>{contactitem.friends.userinfo.phone_number1}</Text>
            </Left>
          </ListItem>

          <ListItem style={styles.center}>
            <Left>
              <Text>{contactitem.friends.userinfo.phone_number2}</Text>
            </Left>
          </ListItem>

          <ListItem style={styles.center}>
            <Left>
              <Text>{contactitem.friends.userinfo.social_media}</Text>
            </Left>
          </ListItem>

          <Button full danger onPress={this.addtoContacts}>
            <Text>Add to phone directory</Text>
          </Button>
        </List>
      </Content>
    );
  }
}

export default observer(ContactDetails);
