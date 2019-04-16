import { createStackNavigator } from "react-navigation";

import ProfileScreen from "../components/Profile";

import MainPageScreen from "../components/MainPage";

const settingsStack = createStackNavigator(
  {
    MainPage: MainPageScreen,
  },
  {
    initialRouteName: "MainPage",
    defaultNavigationOptions: {
      title: "CardedApp",
    },
    headerStyle: { backgroundColor: "#00ff00" },
  }
);

export default settingsStack;
