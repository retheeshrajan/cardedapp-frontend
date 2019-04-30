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
    // const userData = this.props.navigation.getParam("userData");
    // const userProfileData = this.props.navigation.getParam("userData").profiles;
    const userProfileData = profilesStore.userData.profiles;
    console.log(userProfileData);
    let user;
    if (userProfileData) {
      user = userProfileData.map(userProfile => {
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
