import { decorate, observable } from "mobx";
import axios from "axios";
import authStore from "./authStore";

class ProfilesStore {
  userData = [];

  getUserData = async userID => {
    try {
      const res = await axios.get(
        `http://192.168.100.198/user/${userID}/data/`
      );
      const userData = res.data;
      this.userData = userData;
    } catch (error) {
      console.log(error);
    }
  };

  updateProfile = async (profileData, history) => {
    try {
      const res = await axios.put(
        "http://192.168.100.198/userinfo/",
        profileData
      );
      console.log("AUTHSTORE");
      console.log("AUTHSTORE");
      console.log("--------------------------------------");
      // console.log(authStore.user);
      this.getUserData(authStore.user.user_id);
      history.navigate("MyProfile");
      // const userData = res.data;
      // this.userData = userData;
    } catch (error) {
      console.log(error);
    }
  };
}

decorate(ProfilesStore, {
  userData: observable
});

const profilesStore = new ProfilesStore();

export default profilesStore;
