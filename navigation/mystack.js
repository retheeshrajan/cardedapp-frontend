import { createStackNavigator } from "react-navigation";

import LoginScreen from "../components/Login";

import GenerateQR from "../components/QR/generatingQR";
import SignupScreen from "../components/Profile/Register";
import MainPageScreen from "../components/MainPage";
import CodeScanner from "../components/QR/BarCodeScanner";
import RecivedUserInfo from "../components/QR/RecivedUserInfo";

import Contacts from "../components/Contacts/index";
import ContactDetails from "../components/Contacts/ContactDetails";

import UserInfo from "../components/Profile/userInfo";
import UpdateUserInfo from "../components/forms";
import MyProfiles from "../components/Profile/MyProfile";
import ProfileEdit from "../components/Profile/ProfileEdit";

const myStack = createStackNavigator(
  {
    Login: LoginScreen,
    GenerateQR: GenerateQR,
    Contacts: Contacts,
    ContactDetails: ContactDetails,
    BarCodeScanner: CodeScanner,
    Signup: SignupScreen,
    MainPage: MainPageScreen,
    RecivedUserInfo: RecivedUserInfo,
    UserInfo: UserInfo,
    UpdateUserInfo: UpdateUserInfo,
    MyProfile: MyProfiles,
    ProfileEdit: ProfileEdit
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
