import axios from "axios";
import { decorate, computed, observable } from "mobx";

const instance = axios.create({
  baseURL: "http://192.168.100.198:80/"
});

class ContactsStore {
  contacts = [];

  getContacts = async () => {
    try {
      console.log("Getting Contacts..");
      const res = await instance.get("contacts/");
      const contacts = res.data;
      console.log("this is the user contacts", contacts);
      this.contacts = contacts;
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };
}
decorate(ContactsStore, {
  contacts: observable
});

const contactsStore = new ContactsStore();
export default contactsStore;
