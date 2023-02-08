<template id="app">
  <div class="container">
    <v-app>
      <Navbar />
      <v-content>
        <router-view class="router-view" />
      </v-content>
      <Footer />
    </v-app>
    <div id="snackbar-container"></div>
  </div>
</template>

<style scoped lang="scss">
.container {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  //second element is body, element so it has to be bigger than footer
  //so that footer is always at the bottom
  & .v-application {
    flex-grow: inherit;
  }
}
</style>

<script setup>
import Footer from "./components/HomePageComponents/Footer.vue"
import Navbar from "./components/Navbar.vue"

import { useAuthStore } from "@/stores/auth"
import { computed, ref } from "vue"

const auth = useAuthStore()
const sidebar = ref(false)
const menuItems = computed(() =>
  [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: auth.user ? "/logout" : "/login",
      title: auth.user ? "Logout" : "Login",
    },
    {
      path: auth.user ? "/dashboard" : "/register",
      title: auth.user ? "Dashboard" : "Register",
    },
    auth.user
      ? {
          path: "/profile",
          title: "My Profile",
        }
      : null,
  ].filter(Boolean)
)

const appTitle = "Vue 3 + Vuetify 3 + Firebase"
</script>
