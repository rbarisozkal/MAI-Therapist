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
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
applyPolyfills().then(() => {
  defineCustomElements(window);
});
Amplify.configure(awsExports);

const vuetify = createVuetify({
  components,
  directives,
});
createApp(app).use(store).use(router).use(vuetify).mount("#app");
