import { defineStore } from "pinia";
import axios from "axios";
import { useAuthStore } from "@/stores/auth";

export const usePatientStore = defineStore("patientStore", {
  state: () => ({
    allPatients: null,
    rootURL: "https://1vfug9rbhd.execute-api.us-east-1.amazonaws.com/default",
  }),
  getters: {},
  actions: {
    getAllPatients() {
      const authStore = useAuthStore();
      let therapistId = authStore.user.username;
      console.log(therapistId);
      axios
        .get(`${this.rootURL}/getPatients?therapistId=${therapistId}`)
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
