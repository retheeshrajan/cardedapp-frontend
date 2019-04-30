import jwt_decode from "jwt-decode";
import { decorate, observable, computed } from "mobx";
import axios from "axios";
import { AsyncStorage } from "react-native";

const instance = axios.create({
  baseURL: "http://192.168.100.97:80/"
});

class AuthStore {
  user = null;
  profile = null;
  signinmsg = "";
  loading = true;
  userInfo = null;

  signupUser = async (userData, history) => {
    try {
      console.log(this.user);
      const res = await instance.post("signup/", userData);
      const user = res.data;
      this.setUser(user.token);
      history.navigate("UserInfo");
      console.log("Sign up");
    } catch (err) {
      console.log(err.message);
    }
  };

  CreateProfile = async (userData, history) => {
    try {
      console.log("inside update profile - authStore..");
      console.log("userData in updateProfile: " + userData);
      console.log("UserID: ", this.user.user_id);
      // const respon = await instance.get(`user/${this.user.user_id}/data/`);
      // const userDataInfo = respon.data;
      // console.log("user ifoooooo", userDataInfo.userinfo.id);
      console.log(userData);
      let phone_number = [];
      Object.keys(userData).forEach(item => {
        if (item.includes("phone_number")) {
          phone_number.push({
            number: userData[item]
          });
        }
      });
      userData.phone_number = phone_number;
      const res = await instance.post(`userinfo/`, userData);
      console.log("done update..");
      let profile = res.data;
      this.profile = profile;
      this.loading = false;
      history.replace("MainPage");
    } catch (err) {
      console.log(err.message);
    }
  };

  getUserInfo = async () => {
    try {
      console.log("before 1");
      console.log("this.user 1", this.user);

      const res = await instance.get(`userinfo/`);
      let userInfo = res.data;
      this.userInfo = userInfo;
      this.loading = false;
    } catch (err) {
      console.log(err.message);
    }
  };

  // getProfile = async () => {
  //   try {
  //     console.log("reaching profile....." + this.user.user_id);
  //     const res = await instance.get("userupdate/");
  //     console.log("loading done profile.");
  //     let profile = res.data;
  //     this.profile = profile;
  //     this.loading = false;
  //     // history.navigate('Profile')
  //     console.log(this.profile.first_name);
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };

  loginUser = async (userData, history) => {
    try {
      const res = await instance.post("login/", userData);
      const user = res.data;
      this.setUser(user.token);
      console.log("this is the user", this.user);
      //clear signinmessage when login is successful
      history.navigate("MainPage");
    } catch (err) {
      console.log(err.message);
      this.signinmsg = "Login failed!";
    }
  };

  checkForToken = async navigation => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now() / 1000;
      const user = jwt_decode(token);
      if (user.exp >= currentTime) {
        this.setUser(token);
        navigation.replace("MainPage");
      } else {
        this.logout();
      }
    }
  };

  logout = navigation => {
    console.log("logout begin....");
    this.setUser();
    navigation.replace("Login");
  };

  setUser = async token => {
    try {
      if (token) {
        axios.defaults.headers.common.Authorization = `JWT ${token}`;
        const decodedUser = jwt_decode(token);
        this.user = decodedUser;
        await AsyncStorage.setItem("myToken", token);
      } else {
        console.log("logout begin...in else without token");

        delete axios.defaults.headers.common.Authorization;
        await AsyncStorage.removeItem("myToken");
        this.user = null;
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  //   get myProfile() {
  //     let myProfile = this.profile;

  //     return myProfile;
  //   }
}

decorate(AuthStore, {
  user: observable,
  profile: observable,
  signinmsg: observable,
  loading: observable,
  userInfo: observable
  // myProfile: computed,
});

const authStore = new AuthStore();

export default authStore;
