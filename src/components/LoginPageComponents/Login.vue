<template>
    <v-app>
        <v-form v-model="valid" ref="form" @submit.prevent="submit">


            <v-text-field v-model="email" label="E-mail"></v-text-field>
            <v-text-field v-model="password" :rules="nameRules" :counter="10" label="Password"></v-text-field>
            <!-- <v-select v-model="selectedItem" :rules="[v => !!v || 'Item is required']" :items="items"
                label="Select"></v-select>

            <v-checkbox :rules="[v => !!v || 'You must agree to continue!']" v-model="isTherapist" value="1"
                label="Option" type="checkbox"></v-checkbox> -->

            <v-btn @click="validate" class="me-4" type="submit">
                login
            </v-btn>

            <v-btn @click="reset">
                clear
            </v-btn>
        </v-form>
    </v-app>
</template>
<style>
.v-form {
    width: 100%;
    height: auto;
    padding: 10rem 16rem 10rem 16rem;
}
</style>
<script>
import { Amplify, Auth } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-vue';
import '@aws-amplify/ui-vue/styles.css';
import aws_exports from '../../aws-exports';
Amplify.configure(aws_exports);
export default {
    data() {
        return {
            valid: true,
            name: "",
            phone: "",
            email: "",
            password: "",
            items: [
                "Item 1",
                "item 2",
                "Item 3"
            ],
            selectedItem: "",
            isTherapist: null,
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
        }
    },
    methods: {
        submit() {

        },
        async validate() {
            const { valid } = await this.$refs.form.validate();
            if (valid) {

                let password;
                let username;
                password = this.password.toLowerCase();
                username = this.email.toLowerCase();
                //check if login attempt is successful

                const result = await Auth.signIn({
                    username,
                    password,
                });
                console.log(result)
            }
        },

        reset() {
            this.$refs.form.reset()
        },
        resetValidation() {
            this.$refs.form.resetValidation()
        },
    },

}
</script>
<style>

</style>