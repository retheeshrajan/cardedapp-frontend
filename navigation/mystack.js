import { createStackNavigator } from "react-navigation";

import LoginScreen from "../components/Login";
import GenerateQR from "../components/QR/generatingQR";
import SignupScreen from "../components/Profile/Register";
import MainPageScreen from "../components/MainPage";
import CodeScanner from "../components/QR/BarCodeScanner";
import RecivedUserInfo from "../components/QR/RecivedUserInfo";

const myStack = createStackNavigator(
  {
    Login: LoginScreen,
    GenerateQR: GenerateQR,
    BarCodeScanner: CodeScanner,
    Signup: SignupScreen,
    MainPage: MainPageScreen,
    RecivedUserInfo: RecivedUserInfo
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "CardedApp"
    },
    headerStyle: { backgroundColor: "#00ff00" }
  }
);

export default myStack;
