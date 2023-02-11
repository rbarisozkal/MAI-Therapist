<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" offset-sm="3" style="width: 100%">
          <v-form>
            <div v-if="!useAuth.stepConfirmCode">
              <v-text-field v-model="user.email" label="Email" type="email" required style="width: 500px"
                error="Please enter a valid email address" />
              <v-text-field v-model="user.password" label="Password" type="password" required style="width: 500px"
                error="Please enter a valid password" />
            </div>
            <div v-else-if="useAuth.stepConfirmCode">
              <v-text-field v-model="user.confirmCode" label="Confirmation Code" type="text" required
                style="width: 500px" error="Please enter a valid confirmation code" />
            </div>
            <v-btn color="primary" v-if="!useAuth.stepConfirmCode" @click="submitForm">
              Submit
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style>
.v-form {
  width: 100%;
  height: auto;
  padding: 10rem 16rem 10rem 16rem;
}
</style>
<script setup>
import useSnackbar from "@/composables/useSnackbar"
import { useAuthStore } from "@/stores/auth"
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { Auth } from 'aws-amplify'
const useAuth = useAuthStore()
const router = useRouter();
const user = reactive({
  email: "",
  password: "",
})

async function submitForm() {
  useAuth.signIn(user)
}
</script>

<style scoped>
.v-form {
  width: 100%;
  height: auto;
  padding: 10rem 16rem 10rem 16rem;
}
</style>
<style>

</style>
