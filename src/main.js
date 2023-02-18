import { createApp, markRaw } from "vue";
import app from "./App.vue";
import router from "./router";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import awsconfig from "./aws-exports";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import {
  applyPolyfills,
  defineCustomElements,
} from "@aws-amplify/ui-components/loader";
import "@mdi/font/css/materialdesignicons.css";
Amplify.configure(awsconfig);
import "vuetify/styles";
import "vuetify/dist/vuetify.min.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@aws-amplify/ui-vue/styles.css";
import { createPinia } from "pinia";
const pinia = createPinia();

pinia.use(({ store }) => {
  store.$router = markRaw(router);
});
applyPolyfills().then(() => {
  defineCustomElements(window);
});
Amplify.configure(awsExports);
import AmplifyVue from "@aws-amplify/ui-vue";

const vuetify = createVuetify({
  components,
  directives,
});
createApp(app)
  .use(router)
  .use(vuetify)
  .use(AmplifyVue)
  .use(pinia)
  .mount("#app");
