import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { router } from "./router";

Vue.config.productionTip = false;

//******************** */
// *** Bootstrap ***
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
//******************** */
// *** mdi ***
import "@mdi/font/css/materialdesignicons.css";
//******************** */
// *** plugins ***
import "./plugins/global-components";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
