<template>
  <div>
    <authenticator :form-fields="formFields" :sign-up-attributes="signUpAttributes">
      <template v-slot="{ user }">
        <h1>Hello {{ user.username }}!</h1>
        <button @click="signOut">Sign Out</button>
      </template>
    </authenticator>
  </div>
</template>
<script setup>
import LoginForm from "../../src/components/LoginPageComponents/Login.vue"
import { Authenticator } from "@aws-amplify/ui-vue"
import "@aws-amplify/ui-vue/styles.css"
import { useAuthenticator } from "@aws-amplify/ui-vue"
import { Amplify } from "aws-amplify"
import awsconfig from "@/aws-exports"
import { Auth } from 'aws-amplify';
Amplify.configure(awsconfig);
const signUpAttributes = ['custom:credit_card']
const user = useAuthenticator({

});
console.log(user);


// export default {
//   name: "LoginView",
//   components: {
//     LoginForm,
//   },
//   data() {
//     return {
//       user: null,
//       signOut: null,
//       services: {
//         async handleSignUp(formData) {
//           let { username, password, attributes } = formData;
//           // custom username
//           username = username.toLowerCase();
//           attributes.email = attributes.email.toLowerCase();
//           return Auth.signUp({
//             username,
//             password,
//             attributes,
//             autoSignIn: {
//               enabled: true,
//             },
//           })
//         },
//       },
//       formFields: {
//         signIn: {
//           username: {
//             placeholder: 'Enter Your Email',
//             isRequired: true,
//             label: 'Email:'
//           },
//         },
//         signUp: {
//           username: {
//             placeholder: 'Enter Your Email',
//             isRequired: true,
//             label: 'Email:'
//           },
//           password: {
//             placeholder: 'Enter Your Password',
//             isRequired: true,
//             label: 'Password:'
//           },
//           name: {
//             placeholder: 'Enter Your Name and Surname',
//             isRequired: true,
//             label: 'Name:'
//           },

//         }
//       }
//     }
//   },
//   methods: {

//   },
//   computed: {
//     checkServices() {
//       console.log(this.services)
//     }
//   },
//   beforeCreate() {

//   },

</script>
