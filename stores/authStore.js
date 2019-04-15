import jwt_decode from "jwt-decode";
import { decorate, observable, computed } from "mobx";
import axios from "axios";
import { AsyncStorage } from "react-native";

const instance = axios.create({
  baseURL: "http://192.168.100.206:8000/",
});

class AuthStore {
  user = null;
  profile = null;
  signinmsg = "";

  signupUser = async (userData, history) => {
    try {
      console.log("1");
      console.log("Userdata: ", userData);
      const res = await instance.post("signup/", userData);
      console.log("2");
      const user = res.data;
      this.loginUser(userData, history);
    } catch (err) {
      console.log(err.message);
    }
  };

  updateProfile = async (userData, history) => {
    try {
      console.log("inside update profile - authStore..");
      console.log("userData in updateProfile: " + userData.first_name);

      const res = await instance.put("userupdate/", userData);
      console.log("done update..");
      let profile = res.data;
      this.profile = profile;
      this.loading = false;
      history.replace("Profile");
    } catch (err) {
      console.log(err.message);
    }
  };

  getProfile = async () => {
    try {
      console.log("reaching profile....." + this.user.user_id);
      const res = await instance.get("userupdate/");
      console.log("loading done profile.");
      let profile = res.data;
      this.profile = profile;
      this.loading = false;
      // history.navigate('Profile')
      console.log(this.profile.first_name);
    } catch (err) {
      console.log(err.message);
    }
  };

  loginUser = async (userData, history) => {
    try {
      console.log("login_1");
      console.log("userData: " + userData.username);
      //console.log(res);
      const res = await instance.post("login/", userData);
      if (res) {
        console.log("login_2" + res.data);
        // cartStore.qtySum = ' '
        const user = res.data;
        this.setUser(user.token);
        if (this.user) {
          // this.getProfile();
          this.signinmsg = " ";
          history.replace("Profile");
          // history.navigate('Profile')
        } else {
          this.signinmsg = "Login failed!";
        }
      }
    } catch (err) {
      console.log(err.message);
      this.signinmsg = "Login failed!";
    }
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now() / 1000;
      const user = jwt_decode(token);
      if (user.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.logout();
      }
    }
  };

  logout = history => {
    console.log("logout begin....");
    this.setUser();
    history.replace("Login");
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
        await AsyncStorage.removeItem("myToken");
        delete axios.defaults.headers.common.Authorization;
        this.user = null;
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  get myProfile() {
    let myProfile = this.profile;

    return myProfile;
  }
}

decorate(AuthStore, {
  user: observable,
  profile: observable,
  signinmsg: observable,
  myProfile: computed,
});

const authStore = new AuthStore();
authStore.checkForToken();

export default authStore;
