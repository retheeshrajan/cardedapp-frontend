import React from "react";
import { Icon } from "native-base";

import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import myStack from "./mystack";
import settingsStack from "./settingsstack";

//import authStore from "../stores/authStore";

const BottomTab = createBottomTabNavigator(
  {
    ProfileTab: myStack,
    SettingTab: settingsStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "SettingTab") {
          iconName = "profile";
          iconType = "AntDesign";
        } else if (routeName === "ProfileTab") {
          iconName = "person";
          iconType = "MaterialIcons";
        }
        return (
          <Icon name={iconName} style={{ color: tintColor }} type={iconType} />
        );
      },
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#6200EE",
      inactiveTintColor: "#858585",
      style: {
        backgroundColor: "#aabbcc",
      },
      labelStyle: {
        fontSize: 12,
      },
    },
  }
);

const AppContainer = createAppContainer(BottomTab);

export default AppContainer;
