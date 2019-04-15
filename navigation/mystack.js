import { createStackNavigator } from "react-navigation";

import LoginScreen from "../components/Login";
import ProfileScreen from "../components/Profile";

const myStack = createStackNavigator(
  {
    Login: LoginScreen,
    Profile: ProfileScreen,
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "Carded",
    },
    headerStyle: { backgroundColor: "#00ff00" },
  }
);

export default myStack;
