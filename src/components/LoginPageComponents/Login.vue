<template>
  <v-app>
    <v-form ref="form" v-model="valid" @submit.prevent="submit">
      <v-text-field
        v-model="name"
        :rules="nameRules"
        :counter="10"
        label="Name"
      ></v-text-field>

      <v-text-field
        v-model="phone"
        :counter="7"
        label="Phone Number"
      ></v-text-field>

      <v-text-field v-model="email" label="E-mail"></v-text-field>

      <v-select
        v-model="selectedItem"
        :rules="[(v) => !!v || 'Item is required']"
        :items="items"
        label="Select"
      ></v-select>

      <v-checkbox
        v-model="isTherapist"
        :rules="[(v) => !!v || 'You must agree to continue!']"
        value="1"
        label="Option"
        type="checkbox"
      ></v-checkbox>

      <v-btn class="me-4" type="submit" @click="validate"> login </v-btn>

      <v-btn @click="reset"> clear </v-btn>
    </v-form>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      valid: true,
      name: '',
      phone: '',
      email: '',
      items: ['Item 1', 'item 2', 'Item 3'],
      selectedItem: '',
      isTherapist: null,
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
    }
  },
  methods: {
    submit() {},
    async validate() {
      const { valid } = await this.$refs.form.validate()
      if (valid) {
        alert('Form is valid')

        let person = {
          name: this.name,
          phone: this.phone,
          email: this.email,
          selectedItem: this.selectedItem,
          isTherapist: this.isTherapist,
        }
        console.log(person)
        this.name = ''
        this.phone = ''
        this.email = ''
        this.items = ''
        this.isTherapist = ''
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
.v-form {
  width: 100%;
  height: auto;
  padding: 10rem 16rem 10rem 16rem;
}
</style>
<style></style>
