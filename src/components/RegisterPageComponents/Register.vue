<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" offset-sm="3" style="width: 100%">
          <v-form>
            <div v-if="!useAuth.stepConfirmCode">
              <v-text-field
                v-model="user.email"
                label="Email"
                type="email"
                required
                style="width: 500px"
                error="Please enter a valid email address"
              />
              <v-text-field
                v-model="user.password"
                label="Password"
                type="password"
                required
                style="width: 500px"
                error="Please enter a valid password"
              />
              <!-- credit card infos -->
              <v-text-field
                v-model="user.creditCardNumber"
                label="Credit Card Number"
                type="text"
                required
                style="width: 500px"
                error="Please enter a valid credit card number"
              />
              <v-text-field
                v-model="user.ccExpDate"
                label="Credit Card Expiration Date"
                type="text"
                required
                style="width: 500px"
                error="Please enter a valid credit card expiration date"
              />
              <v-text-field
                v-model="user.ccSecCode"
                label="Credit Card Security Code"
                type="text"
                required
                style="width: 500px"
                error="Please enter a valid credit card security code"
              />
            </div>
            <div v-else-if="useAuth.stepConfirmCode">
              <v-text-field
                v-model="user.confirmCode"
                label="Confirmation Code"
                type="text"
                required
                style="width: 500px"
                error="Please enter a valid confirmation code"
              />
            </div>
            <v-btn
              color="primary"
              v-if="!useAuth.stepConfirmCode"
              @click="submitForm"
            >
              Submit
            </v-btn>
            <v-btn
              color="primary"
              v-if="useAuth.stepConfirmCode"
              @click="resendConfirmationCode"
            >
              Resend Confirmation Code
            </v-btn>
            <v-btn
              color="primary"
              v-if="useAuth.stepConfirmCode"
              @click="confirmSignUp"
            >
              Confirm Sign Up
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
import { useAuthStore } from "@/stores/auth"
import { reactive } from "vue"

const useAuth = useAuthStore()

const user = reactive({
  email: "",
  password: "",
  confirmCode: "",
  creditCardNumber: "",
  ccExpDate: "",
  ccSecCode: "",
})

async function submitForm() {
  useAuth.signUp(user)
}
function resendConfirmationCode() {
  useAuth.resendConfirmationCode(user.email)
}
function confirmSignUp() {
  useAuth.confirmSignUp(user.email, user.confirmCode)
}
</script>

<style>
.v-form {
  width: 100%;
  height: auto;
  padding: 10rem 16rem 10rem 16rem;
}
</style>
<style></style>
