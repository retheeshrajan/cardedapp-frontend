import { createStackNavigator } from "react-navigation";

import LoginScreen from "../components/Login";
import ProfileScreen from "../components/Profile";
import SignupScreen from "../components/Profile/Register";

const myStack = createStackNavigator(
  {
    Login: LoginScreen,
    Profile: ProfileScreen,
    Signup: SignupScreen,
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "CardedApp",
    },
    headerStyle: { backgroundColor: "#00ff00" },
  }
);

export default myStack;
