import { createStackNavigator } from "react-navigation";

import LoginScreen from "../components/Login";
import MainPageScreen from "../components/MainPage";

const settingsStack = createStackNavigator(
  {
    MainPage: MainPageScreen,
    Login: LoginScreen,
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
