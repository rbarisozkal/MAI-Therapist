import { defineStore } from "pinia";
import axios from "axios";
export const usePatientStore = defineStore("patientStore", {
  state: () => ({
    allPatients: null,
    rootURL: "https://1vfug9rbhd.execute-api.us-east-1.amazonaws.com/default",
  }),
  getters: {},
  actions: {
    getAllPatients() {
      //use axios to get all patients
      axios
        .get(`${this.rootURL}/getPatients`)
        .then((response) => {
          this.allPatients = response.data;
          console.log("response", response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
