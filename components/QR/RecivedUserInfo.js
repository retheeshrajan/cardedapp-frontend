import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  View,
  ListItem,
  Text,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title
} from "native-base";
import qrStore from "../../stores/QRStore";

class RecivedUserInfo extends Component {
  handleFollowUser = userID => {
    qrStore.FollowUserScanned(userID);
  };
  render() {
    const userInfo = this.props.navigation.getParam("userInfo");
    console.log("sup", userInfo);
    return (
      <Container>
        <Content>
          <ListItem>
            <Text>Name: {userInfo.name}</Text>
          </ListItem>
          <ListItem>
            <Text>Company: {userInfo.company_name}</Text>
          </ListItem>
          <ListItem last>
            <Text>Phone Number: {userInfo.phone_number1}</Text>
          </ListItem>
          <ListItem>
            <Text>Phone Number 2: {userInfo.phone_number2}</Text>
          </ListItem>
          <ListItem>
            <Text>Email: {userInfo.email}</Text>
          </ListItem>
          <Right>
            <Button
              transparent
              onPress={() => this.handleFollowUser(userInfo.user)}
            >
              <Text>Add</Text>
            </Button>
          </Right>
        </Content>
      </Container>
    );
  }
}
export default RecivedUserInfo;
