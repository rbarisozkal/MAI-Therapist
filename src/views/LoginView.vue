<template>
  <div>
    <Login @userData="receiveUserData" />
    <h1 v-if="userData">Hello akjsdh{{ userData.username }}!</h1>
    {{ userData }}
  </div>
</template>
<script>
import Login from "../components/LoginPageComponents/Login.vue";
export default {
  name: "LoginView",
  components: {
    Login,
  },
  setup() {
    const receiveUserData = (user) => {
      this.userData = user
    }

    return {
      userData: null,
      receiveUserData
    }
  }
};
</script>
