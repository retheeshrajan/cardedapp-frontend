import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  ListItem,
  Text,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Input
} from "native-base";
import qrStore from "../../stores/QRStore";
import { observer } from "mobx-react";

class RecivedUserInfo extends Component {
  state = {
    note: ""
  };
  handleFollowUser = userProfileID => {
    qrStore.FollowUserScanned(userProfileID, this.state, this.props.navigation);
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
          <ListItem>
            <Input name="note" onChangeText={note => this.setState({ note })} />
          </ListItem>
          <Right>
            <Button
              transparent
              onPress={() => this.handleFollowUser(userInfo.id)}
            >
              <Text>Add</Text>
            </Button>
          </Right>
        </Content>
      </Container>
    );
  }
}
export default observer(RecivedUserInfo);
