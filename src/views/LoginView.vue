<template>
  <div>
    <LoginForm />
    <authenticator>
      <template v-slot="{ user, signOut }">
        <h1>Hello {{ user.username }}!</h1>
        <button @click="signOut">Sign Out</button>
      </template>
    </authenticator>
  </div>
</template>
<script>
import LoginForm from "../../src/components/LoginPageComponents/Login.vue"
import { Authenticator } from "@aws-amplify/ui-vue"
import "@aws-amplify/ui-vue/styles.css"

import { Amplify } from "aws-amplify"
import awsconfig from "@/aws-exports"

Amplify.configure(awsconfig)
export default {
  name: "LoginView",
  components: {
    LoginForm,
  },
}
</script>
