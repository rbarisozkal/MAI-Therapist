import { defineStore } from "pinia";
export const useCommunicationStore = defineStore("communication", {
  state: () => ({
    chosenComponent: null,
  }),
  getters: {
    getChosenComponent() {
      return this.chosenComponent;
    },
  },
  actions: {
    setChosenComponent(component) {
      this.chosenComponent = component;
    },
  },
});
