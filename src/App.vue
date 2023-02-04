<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link v-if="!isUserLoggedIn" to="/about">About</router-link>
      <router-link to="/profile">My Profile</router-link>
      <router-link :to="isUserLoggedInNavigate">{{ checkRegisterStatus }}</router-link>
      <router-link :to="isUserLoggedInNavigateLogin">{{ checkUserLoggedIn }}</router-link>
     </nav>
    <router-view class="router-view" />
    <Footer />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

* {

  font-family: 'Manrope', sans-serif;

}

nav {
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: #5C6BC0;
  color: #ffffff;

  &:last-child {
    padding-right: 0;
  }
}

nav a {
  padding-left: 2rem;
  font-weight: bold;
  color: #ffffff;
}

nav a.router-link-exact-active {
  color: #2c3e50;
}
</style>

<script>
import Footer from "./components/HomePageComponents/Footer.vue";
export default {
  name: "App",
  components: {
    Footer,
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      isUserLoggedIn: false,
    };
  },

  methods: {

  },
  created() {

  },
  computed: {
    checkRegisterStatus() {
      return this.isUserLoggedIn ? 'My Dashboard' : 'Register';
    },
    checkUserLoggedIn() {
      return this.isUserLoggedIn ? 'Logout' : 'Login';
    },
    isUserLoggedInNavigate() {
      return this.isUserLoggedIn ? '/dashboard' : '/register';
    },
    isUserLoggedInNavigateLogin() {
      return this.isUserLoggedIn ? '/logout' : '/login';
    }
  }

};
</script>
