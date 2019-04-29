import React, { Component } from "react";
import { Image } from "react-native";
import profilesStore from "../../stores/profilesStore";
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

class MyProfiles extends Component {
  render() {
    const userProfile = this.props.userProfile;
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{ uri: "Image URL" }} />
            <Body>
              <Text>{userProfile.company_name}</Text>
              <Text note>GeekyAnts</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{ uri: "Image URL" }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>12 Likes</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>4 Comments</Text>
            </Button>
          </Body>
          <Right>
            <Text>11h ago</Text>
          </Right>
        </CardItem>
      </Card>
    );
  }
}
export default MyProfiles;
