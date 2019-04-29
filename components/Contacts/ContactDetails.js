import React, { Component } from "react";
// import { Divider } from 'react-native-elements';
import { observer } from "mobx-react";
import { Contacts } from "expo";
import { Communications } from "react-native-communications";
// NativeBase Components
import {
  Text,
  Button,
  Left,
  List,
  ListItem,
  Content,
  Right,
  Body
} from "native-base";

// Style
import styles from "./styles";

// Store
import authStore from "../../stores/authStore";

class ContactDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("contactitem", {}).name,
    headerStyle: { backgroundColor: "#28e" }
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

  addtoContacts = async contactitem => {
    try {
      if (authStore.user) {
        const contact = {
          [Contacts.Fields.FirstName]: contactitem.friends.userinfo.name,
          // [Contacts.Fields.LastName]: this.state.LastName,
          [Contacts.Fields.Company]: contactitem.friends.userinfo.company_name,
          [Contacts.Fields.Emails]: [
            { label: "emails", number: contactitem.friends.userinfo.email }
          ],
          [Contacts.Fields.PhoneNumbers]: [
            {
              label: "home",
              number: contactitem.friends.userinfo.phone_number1
            },
            {
              label: "mobile",
              number: contactitem.friends.userinfo.phone_number2
            }
          ]
          // [Contacts.Fields.UrlAddresses]: [
          //   {
          //     label: "urlAddresses",
          //     number: contactitem.friends.userinfo.social_media
          //   }
          // ]
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
          <ListItem>
            <Body>
              <Text style={styles.text}>
                {contactitem.friends.username + "\n"}
              </Text>
            </Body>
          </ListItem>

          <ListItem>
            <Left>
              <Text>Name : {contactitem.friends.userinfo.name}</Text>
            </Left>
          </ListItem>
          {/* <Divider style={{ backgroundColor: 'blue', height:2 }} />; */}
          <ListItem>
            <Left>
              <Text>Company : {contactitem.friends.userinfo.company_name}</Text>
            </Left>
          </ListItem>

          <ListItem>
            <Left>
              <Text
                onPress={() =>
                  Communications.email(
                    [contactitem.friends.userinfo.email],
                    null,
                    null,
                    "My Subject",
                    "My body text"
                  )
                }
              >
                Email : {contactitem.friends.userinfo.email}
              </Text>
            </Left>
          </ListItem>

          <ListItem>
            <Left>
              <Text>Tel_1 : {contactitem.friends.userinfo.phone_number1}</Text>
            </Left>

            <Body>
              <Button
                onPress={() =>
                  Communications.text(
                    contactitem.friends.userinfo.phone_number1
                  )
                }
                style={styles.msgbtn}
              >
                <Text>M</Text>
              </Button>
            </Body>
            <Right>
              <Button
                onPress={() =>
                  Communications.phonecall(
                    contactitem.friends.userinfo.phone_number1,
                    true
                  )
                }
                style={styles.telbtn}
              >
                <Text>T</Text>
              </Button>
            </Right>
          </ListItem>

          <ListItem>
            <Left>
              <Text>Tel_2 : {contactitem.friends.userinfo.phone_number2}</Text>
            </Left>
            <Body>
              <Button
                onPress={() =>
                  Communications.text(
                    contactitem.friends.userinfo.phone_number2
                  )
                }
                style={styles.msgbtn}
              >
                <Text>M</Text>
              </Button>
            </Body>
            <Right>
              <Button
                onPress={() =>
                  Communications.phonecall(
                    contactitem.friends.userinfo.phone_number2,
                    true
                  )
                }
                style={styles.telbtn}
              >
                <Text>T</Text>
              </Button>
            </Right>
          </ListItem>

          <ListItem>
            <Left>
              <Text
                onPress={() =>
                  Communications.web(contactitem.friends.userinfo.social_media)
                }
              >
                Social : {contactitem.friends.userinfo.social_media}
              </Text>
            </Left>
          </ListItem>

          <ListItem>
            <Left>
              <Text>Note : {contactitem.Note}</Text>
            </Left>
          </ListItem>

          <ListItem>
            <Left />
            <Body>
              <Button
                onPress={() => this.addtoContacts(contactitem)}
                style={styles.adddir}
              >
                <Text>Add</Text>
              </Button>
            </Body>
            <Right />
          </ListItem>
        </List>
      </Content>
    );
  }
}

export default observer(ContactDetails);
