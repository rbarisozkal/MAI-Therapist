<template>
    <v-app>
        <v-form v-model="valid" ref="form" @submit.prevent="submit">
            <v-text-field v-model="name" :rules="nameRules"  label="Name"></v-text-field>

            <v-text-field v-model="surname" :rules="SurnameRules"  label="Surname"></v-text-field>

            <v-text-field v-model="phone" :rules="[v => !!v || 'Phone Number is required']" :counter="11" label="Phone Number"></v-text-field>

            <v-text-field v-model="email" :rules="[v => !!v || 'Email is required']" label="E-mail"></v-text-field>

            <v-text-field v-model="password" :type="passwordFieldType" :rules="[v => !!v || 'Password is required']"
                label="Password"></v-text-field>
                <v-switch type="password"  v-model="showPassword" hide-details true-value="hide" false-value="show" :label="`${showPassword}`" @click="switcVisibility"
  ></v-switch>
            <v-checkbox :rules="[v => !!v || 'You must agree to continue!']" v-model="isTherapist" value="1"
                label="I'm a therapist" type="checkbox"></v-checkbox>

            <v-btn @click="register" class="me-4" type="submit">
                register
            </v-btn>
        </v-form>
    </v-app>
</template>
<style>
.v-form{
    width: 100%;
    height: auto;
    padding: 10rem 16rem 10rem 16rem;
}
</style>
<script>
import { shallowEqual } from '@babel/types';

export default {
    data() {
        return {
            users: [],
            name: "",
            surname: "",
            phone: "",
            email: "",
            password: "",
            selectedItem: "",
            isTherapist: null,
            currentUser: null,
            nameRules: [
                v => !!v || 'Name is required',
            ],
            SurnameRules: [
                v => !!v || 'Surname is required',
            ],
            passwordFieldType: "password",
            showPassword: 'show',
        }
    },
    methods: {
        submit() {
            
        },
         register() {
            
                const newUser = {
                    name: this.name,
                    surname: this.surname,
                    phone: this.phone,
                    email: this.email,
                    password: this.password,
                    isTherapist: this.isTherapist
                };
this.users.push(newUser);
this.currentUser = newUser;
this.$nextTick(function() {
    this.$refs.name.focus();
})
; 

        },
        switcVisibility() {
            this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
        },
    },
    mounted(){
       if(localStorage.users){
        this.users = JSON.parse(localStorage.users);
       }
    },
    watch: {
        users: {
            handler(newUser) {
            localStorage.users = JSON.stringify(newUser);
        },
    deep: true
}
    },

}

</script>
<style>

</style>
