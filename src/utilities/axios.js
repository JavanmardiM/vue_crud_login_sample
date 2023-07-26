import axios from "axios";
import { BASE_URL } from "./env";
import qs from "qs";

const Axios = axios.create({
  paramsSerializer: function(params) {
    return qs.stringify(params);
  },
  baseURL: BASE_URL,
});

Axios.interceptors.request.use(function(config) {
  let token = localStorage.getItem("token");
  let headers = {};
  if (token) {
    headers["authorization"] = `${token}`;
    config.headers = headers;
  }

  return config;
});

export { Axios };
