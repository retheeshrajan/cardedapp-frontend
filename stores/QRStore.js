import axios from "axios";
import { decorate, computed, observable } from "mobx";

const instance = axios.create({
  baseURL: "http://192.168.100.198:80/"
});

class QRStore {
  userProfileID = null;
  user = null;

  getUserData = async profileID => {
    try {
      //console.log("userID", profileID);
      const res = await instance.get(`user/${profileID}/data`);
      const userProfile = res.data;
      //console.log("this is the user data", userProfile);
      this.userProfileID = userProfile.id;
    } catch (error) {
      //console.log(error);
    }
  };

  getUserInfo = async userInfoID => {
    try {
      const res = await instance.get(`userinfo/`);
      const user = res.data;
      this.user = user;
      //console.log("this is the user info", user.userinfo.company_name);
      return true;
    } catch (error) {
      //console.log(error);
      return false;
    }
  };

  getUserInfoScan = async data => {
    try {
      const res = await axios.get(data);
      this.user = res.data;
      //console.log("Scanned user", this.user);
    } catch (error) {
      //console.log(error);
    }
  };

  FollowUserScanned = async userProfileID => {
    try {
      const res = await instance.post(`follow/${userProfileID}/user/`);
      const data = res.data;
      //console.log("user to follow data", data);
    } catch (error) {
      //console.log(error);
    }
  };
}
decorate(QRStore, {
  userInfoID: observable
});

const qrStore = new QRStore();
export default qrStore;
