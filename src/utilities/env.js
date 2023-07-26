const env_app = process.env.VUE_APP_ENV;
let envApiUrl = "";

if (env_app === "production") {
  envApiUrl = process.env.VUE_APP_DOMAIN_PROD;
} else if (env_app === "staging") {
  envApiUrl = process.env.VUE_APP_DOMAIN_STAGE;
} else {
  envApiUrl = process.env.VUE_APP_DOMAIN_DEV;
}

export const BASE_URL = envApiUrl;
