import { decorate, observable } from "mobx";
import axios from "axios";

class ProfilesStore {
  userData = null;

  getUserData = async userID => {
    try {
      const res = await axios.get("http://192.168.100.198/user/6/data/");
      const userData = res.data;
      this.userData = userData;
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
