import Vuex from "vuex";
import Vue from "vue";

import { mainModule } from "./main";
import { userInfoModule } from "./userInfo";

Vue.use(Vuex);

const storeOptions = {
  modules: {
    main: mainModule,
    userInfo: userInfoModule,
  },
};

export const store = new Vuex.Store(storeOptions);

export default store;
