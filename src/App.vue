<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/">Login</router-link>
    <router-link to="/">My Profile</router-link>
  </nav>
  <router-view class="router-view" />
  <Footer class="footer"></Footer>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}


nav {
  padding: 1rem;
  
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: lightblue;

  &:last-child {
    padding-right: 0;
  }
}

nav a {
  padding-left: 2rem;
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import Footer from "./components/HomePageComponents/Footer.vue";
export default {
  name: "App",
  components: {
    Footer,
  },
};
</script>
