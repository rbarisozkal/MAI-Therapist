import { createApp } from "vue";
import app from "./App.vue";
import router from "./router";
import store from "./store";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import awsconfig from "./aws-exports";
import {
  applyPolyfills,
  defineCustomElements,
} from "@aws-amplify/ui-components/loader";
Amplify.configure(awsconfig);

applyPolyfills().then(() => {
  defineCustomElements(window);
});
Amplify.configure(awsExports);

createApp(app).use(store).use(router).mount("#app");
