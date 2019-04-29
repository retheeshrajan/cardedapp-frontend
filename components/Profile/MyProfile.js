import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
import profilesStore from "../../stores/profilesStore";
import UserProfile from "./UserProfile";
import { observer } from "mobx-react";

class MyProfiles extends Component {
  render() {
    const userData = this.props.navigation.getParam("userData").user_info;
    console.log(userData);
    let user;
    if (userData) {
      user = userData.map(userProfile => {
        return <UserProfile key={userProfile.id} userProfile={userProfile} />;
      });
    }
    return (
      <Container>
        <Header />
        <Content>{user}</Content>
      </Container>
    );
  }
}
export default observer(MyProfiles);
