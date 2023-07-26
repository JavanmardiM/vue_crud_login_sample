import { Axios } from "../utilities/axios";

export default {
  async login(payload) {
    return Axios.post(`/api/login`, payload);
  },
  async getUserList() {
    return Axios.get(`/api/users`);
  },
  async getUserById(payload) {
    return Axios.get(`/api/users/${payload.id}`);
  },
};
