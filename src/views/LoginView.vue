<template>
  <authenticator :social-providers="['amazon', 'apple', 'facebook', 'google']" :sign-up-attributes="[
  'address',
  'birthdate',
  'email',
  'family_name',
  'gender',
  'given_name',
  'locale',

  'name',
  'nickname',
  'phone_number',
  'picture',

  'updated_at',
  'website',]">
    <template v-slot="{ user, signOut }">
      <h1>Hello {{ user.username }}!</h1>
      <button @click="signOut">Sign Out</button>
    </template>
  </authenticator>
</template>
<script>
import LoginForm from "../../src/components/LoginPageComponents/Login.vue"
import { Authenticator } from "@aws-amplify/ui-vue"
import "@aws-amplify/ui-vue/styles.css"

import { Amplify } from "aws-amplify"
import awsconfig from "@/aws-exports"
import { Auth } from 'aws-amplify';
Amplify.configure(awsconfig)
export default {
  name: "LoginView",
  components: {
    LoginForm,
  },
  data() {
    return {
      user: null,
      signOut: null,
    }
  },
  methods: {

  },
  computed: {
    async getUser() {
      const user = await Auth.currentAuthenticatedUser();
      console.log(user)
      return user;
    },
  },
  beforeCreate() {

  },
}
</script>
