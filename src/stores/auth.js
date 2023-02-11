import { defineStore } from "pinia";
import { Auth } from "aws-amplify";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    stepConfirmCode: false,
    isUserConfirmed: false,
  }),
  getters: {
    isSignedIn() {
      return !!this.user;
    },
    getUser(user) {
      this.user = user;
    },
  },
  actions: {
    async resendConfirmationCode(email) {
      try {
        await Auth.resendSignUp(email);
        console.log("code resent successfully");
      } catch (err) {
        console.log("error resending code: ", err);
      }
    },
    async confirmSignUp(email, confirmCode) {
      try {
        const res = await Auth.confirmSignUp(email, confirmCode);
        console.log("confirm sign up", res);
        if (res === "SUCCESS") {
          this.isUserConfirmed = true;
          this.$router.push("/login");
        }
        const x = await Auth.currentAuthenticatedUser();
        this.user = x;
        console.log("x", xq);
      } catch (error) {
        console.log("error confirming sign up", error);
      }
    },

    async signUp(user) {
      try {
        const response = await Auth.signUp({
          username: user.email,
          password: user.password,
          attributes: {
            "custom:creditCardNumber": user.creditCardNumber,
            "custom:ccExpDate": user.ccExpDate,
            "custom:ccSecCode": user.ccSecCode,
          },
          autoSignIn: {
            enabled: true,
          },
        });
        console.log("response", response);
        this.stepConfirmCode = true;
      } catch (error) {
        console.log("error signing up:", error);
      }
    },
    async signIn(user) {
      try {
        const response = await Auth.signIn(user.email, user.password);
        this.user = response;
        this.$state.user = this.user;
        this.$router.push({
          name: "DashboardView",
          params: { id: this.user.attributes.sub },
        });
      } catch (error) {
        console.log("error signing in", error);
      }
    },
    async signOut() {
      try {
        await Auth.signOut();
        this.user = null;
        console.log(this);
        console.log(this.$router);
        this.$router.push("/");
      } catch (error) {
        console.log("error signing out: ", error);
      }
    },
  },
});
