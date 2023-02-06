<template>
    <div>
        <authenticator :services="services" initial-state="signUp">
            <template v-slot="{ user, signOut }">
                <h1>Hello {{ user.attributes.email }}!</h1>
                <button @click="signOut">Sign Out</button>
            </template>
        </authenticator>
    </div>
</template>
<style>
.v-form {
    width: 100%;
    height: auto;
    padding: 10rem 16rem 10rem 16rem;
}
</style>
<script>
import { Authenticator } from "@aws-amplify/ui-vue"
import "@aws-amplify/ui-vue/styles.css"
import { useAuthenticator } from "@aws-amplify/ui-vue"
import { Amplify } from "aws-amplify"
import awsconfig from "@/aws-exports"
import { Auth } from 'aws-amplify';
Amplify.configure(awsconfig);

const user = useAuthenticator({

});
console.log(user);

const services = {
    async handleSignUp(formData) {
        let { username, password, attributes } = formData;
        // custom username
        username = username.toLowerCase();
        attributes.email = attributes.email.toLowerCase();
        const result = await Auth.signUp({
            username,
            password,
            attributes,
            autoSignIn: {
                enabled: true,
            },
        });
        console.log(result);
    },

};
const emitUserData = () => {
    this.$emit('userData', user);
}
export default {
    name: "Login",
    components: {

    },
    data() {
        return { user, emitUserData }
    }


};
</script>
<style>

</style>