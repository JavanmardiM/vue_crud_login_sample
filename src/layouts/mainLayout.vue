<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand">Welcome</a>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <div class="nav-link" @click="logout">LogOut</div>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async logout() {
      try {
        await this.$store
          .dispatch("logout")
          .then(() => {
            this.$router.push({ name: "login" }).catch(() => {
              console.log("router error occured");
            });
          })
          .catch((e) => {
            console.log("error1:", e);
          });
      } catch (error) {
        console.log("error2:", error);
      }
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: #4aba70 !important;
}
</style>
