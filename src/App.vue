<template id="app">
  <div class="container">
    <v-app>
      <Navbar />
      <router-view class="router-view" />
      <Footer />
    </v-app>
  </div>
</template>

<style scoped lang="scss">
.router-view {
  flex-grow: 1000;
}

.container {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  //second element is body, element so it has to be bigger than footer
  //so that footer is always at the bottom
  & .v-application {
    min-height: unset !important;

    & .v-application__wrap {
      min-height: unset !important;
      color: red;
    }

  }
}
</style>
<style>
::v-deep .v-application--wrap {
  min-height: fit-content;
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
      path: auth.user ? "/" : "/login",
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

</script>
