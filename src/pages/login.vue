<template>
  <div>
    <div v-if="isLoading">
      <loading></loading>
    </div>
    <div class="login-form">
      <form @submit.prevent="login" novalidate>
        <div class="avatar d-flex align-items-center justify-content-center">
          <i class="mdi mdi-account icon"></i>
        </div>
        <h4 class="modal-title">Login to Your Account</h4>
        <div class="form-group">
          <input
            v-model="data.email"
            type="text"
            class="form-control"
            placeholder="Email"
            required
          />
        </div>
        <div class="form-group">
          <input
            v-model="data.password"
            type="password"
            class="form-control"
            placeholder="Password"
            required
          />
        </div>
        <div class="d-flex justify-content-center">
          <input
            type="submit"
            class="btn btn-primary btn-block btn-lg"
            value="Login"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      data: {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      },
    };
  },
  methods: {
    async login() {
      this.isLoading = true;

      const req = this.data;
      try {
        await this.$store
          .dispatch("login", req)
          .then(() => {
            this.isLoading = false;
            this.$router.push({ name: "home" }).catch(() => {
              console.log("router error occured");
            });
          })
          .catch((e) => {
            this.isLoading = false;
            console.log("error1:", e);
          });
      } catch (error) {
        this.isLoading = false;
        console.log("error2:", error);
      }
    },
  },
};
</script>

<style scoped>
.form-control {
  box-shadow: none;
  border-color: #ddd;
}
.form-control:focus {
  border-color: #4aba70;
}
.login-form {
  width: 350px;
  margin: 0 auto;
  padding: 30px 0;
}
.login-form form {
  color: #434343;
  border-radius: 1px;
  margin-bottom: 15px;
  background: #fff;
  border: 1px solid #f3f3f3;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 30px;
}
.login-form h4 {
  text-align: center;
  font-size: 22px;
  margin-bottom: 20px;
}
.login-form .avatar {
  color: #fff;
  margin: 0 auto 30px;
  text-align: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  z-index: 9;
  background: #4aba70;
  padding: 15px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
}
.login-form .avatar i {
  font-size: 62px;
}
.login-form .form-group {
  margin-bottom: 20px;
}
.login-form .form-control,
.login-form .btn {
  min-height: 40px;
  border-radius: 2px;
  transition: all 0.5s;
}
.login-form .close {
  position: absolute;
  top: 15px;
  right: 15px;
}
.login-form .btn {
  background: #4aba70;
  border: none;
  line-height: normal;
}
.login-form .btn:hover,
.login-form .btn:focus {
  background: #42ae68;
}
.login-form .checkbox-inline {
  float: left;
}
.login-form input[type="checkbox"] {
  margin-top: 2px;
}
.login-form .forgot-link {
  float: right;
}
.login-form .small {
  font-size: 13px;
}
.login-form a {
  color: #4aba70;
}
</style>
