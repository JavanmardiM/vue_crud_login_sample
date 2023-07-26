<template>
  <div>
    <div v-if="isLoading">
      <loading></loading>
    </div>
    <b-container class="pt-3">
      <h1>User List</h1>
      <b-table class="pt-3" striped hover :items="items" :fields="fields">
        <template v-slot:cell(avatar)="row">
          <span>
            <img :src="row.item.avatar" width="50" height="50" />
          </span>
        </template>
        <template v-slot:cell(detail)="row">
          <span class="detail-icon" @click="onDetail(row.item.id)">
            <i class="mdi mdi-account-circle icon"></i>
          </span>
        </template>
      </b-table>
    </b-container>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isLoading: true,
      items: [],
      fields: [
        { key: "avatar" },
        { key: "email" },
        { key: "first_name" },
        { key: "last_name" },
        { key: "detail" },
      ],
    };
  },
  methods: {
    async getUserList() {
      this.isLoading = true;

      const req = this.data;
      try {
        await this.$store
          .dispatch("getUserList", req)
          .then((res) => {
            this.items = res.data;
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
    onDetail(id) {
      if (id) {
        this.$router.push({ name: "userDetail", query: { id } }).catch(() => {
          console.log("router error occured");
        });
      }
    },
  },
  created() {
    this.getUserList();
  },
};
</script>

<style scoped>
.detail-icon {
  font-size: 30px;
}
</style>
