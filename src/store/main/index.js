import api from "../../services/api";
import { removeLocalToken, saveLocalToken } from "../../utilities/utils";

export const mainModule = {
  state: () => ({}),
  mutations: {
    setToken(_, token) {
      localStorage.setItem("token", token);
    },
  },
  actions: {
    async login(vuexContext, payload) {
      try {
        return new Promise((resolve, reject) => {
          api.login(payload).then(
            (response) => {
              saveLocalToken(response.data.token);
              resolve(response.data.token);
            },
            (error) => {
              reject(error);
            }
          );
        });
      } catch (error) {
        console.log("error", error);
      }
    },
    async logout() {
      try {
        removeLocalToken();
      } catch (error) {
        console.log("error", error);
      }
    },
  },
  getters: {},
};
