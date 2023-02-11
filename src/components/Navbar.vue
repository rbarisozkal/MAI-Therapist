<template>
  <div>
    <v-app-bar class="px-10" color="deep-purple accent-4 position-relative" dark prominent>
      <div class="d-md-none d-lg-flex">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </div>

      <v-toolbar-title class="text-left">Mai Therapist</v-toolbar-title>

      <v-spacer></v-spacer>

      <div class="link-list d-sm-none d-md-flex">
        <router-link v-for="item in menuItems" :key="item.title" :to="item.path">
          {{ item.title }}
        </router-link>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-title :key="link" v-for="link in menuItems">
              <router-link :to="link.path">
                {{ link.title }}
              </router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth"
import { computed, ref } from "vue"

const auth = useAuthStore()
const userId = auth.user.username;

console.log(userId)
const drawer = ref(false)
const group = ref(null)
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
      path: auth.user ? "/dashboard/" + userId : "/register",
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

const appTitle = "MaiTherapist"
</script>

<style scoped lang="scss">
.link-list {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  & a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;
  }

  & a:hover {
    color: #f5f5f5;
  }
}
</style>
