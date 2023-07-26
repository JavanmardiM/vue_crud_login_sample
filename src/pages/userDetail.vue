<template>
  <div>
    <div v-if="isLoading">
      <loading></loading>
    </div>
    <b-container>
      <div class="d-flex justify-content-center pt-3">
        <b-card
          :title="user.first_name + ' ' + user.last_name"
          :img-src="user.avatar"
          img-alt="Image"
          img-top
          tag="article"
          style="min-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>
            {{ user.email }}
          </b-card-text>
        </b-card>
      </div>
      <div class="d-flex justify-content-center pt-3">
        <b-button variant="primary" @click="goBack">Go To List</b-button>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isLoading: true,
      user: "",
    };
  },
  methods: {
    async getUser() {
      this.isLoading = true;

      const req = {
        id: this.$route.query.id,
      };
      try {
        await this.$store
          .dispatch("getUserById", req)
          .then((res) => {
            this.user = res.data;
            this.isLoading = false;
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
    goBack() {
      this.$router.go(-1);
    },
  },
  created() {
    this.getUser();
  },
};
</script>

<style scoped>
.btn-primary {
  background-color: #4aba70 !important;
  border: #4aba70 !important;
}
</style>
