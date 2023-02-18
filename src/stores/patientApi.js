import { defineStore } from "pinia";
import axios from "axios";
import { useAuthStore } from "@/stores/auth";
import { useAxios } from "@/composables/useAxios";

export const usePatientStore = defineStore("patientStore", {
  state: () => ({
    allPatients: null,
  }),
  getters: {},
  actions: {
    getAllPatients() {
      const authStore = useAuthStore();
      let therapistId = authStore.user.username;
      console.log(therapistId);
        useAxios().get(`getPatients?therapistId=${therapistId}`)
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
