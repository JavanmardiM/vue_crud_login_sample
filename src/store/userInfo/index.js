import api from "../../services/api";

export const userInfoModule = {
  state: () => ({
    userList: [],
  }),
  mutations: {
    setUserList(state, userList) {
      state.userList = userList;
    },
  },
  actions: {
    async getUserList(vuexContext, payload) {
      try {
        return new Promise((resolve, reject) => {
          api.getUserList(payload).then(
            (response) => {
              resolve(response.data);
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
    async getUserById(vuexContext, payload) {
      try {
        return new Promise((resolve, reject) => {
          api.getUserById(payload).then(
            (response) => {
              resolve(response.data);
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
  },
  getters: {
    userList(state) {
      return state.userList;
    },
  },
};
