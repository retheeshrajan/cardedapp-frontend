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
  componentWillReceiveProps(props) {
    console.log("the props ", props);
  }
  render() {
    // const userData = this.props.navigation.getParam("userData").profiles;
    const userData = profilesStore.userData.profiles;
    console.log(userData);
    let user;
    if (userData) {
      user = userData.map(userProfile => {
        return <UserProfile key={userProfile.id} userProfile={userProfile} />;
      });
    }
    return (
      <Container>
        <Content>{user}</Content>
      </Container>
    );
  }
}
export default observer(MyProfiles);
