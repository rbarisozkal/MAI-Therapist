<template>
    <v-app>
    <v-parallax
    height="1000"
      :src="maiTherapistImage"
    >
      <div class="d-flex flex-column fill-height justify-space-between align-center text-white">
        <h1 class="header text-h4">
          MAI Therapist
        </h1>
        <h4 class="subheading">
            Revolutionizing Mental Health with AI
        </h4>
      </div>
    </v-parallax>
</v-app>
  </template>
<style scoped>

</style>
<script>
export default{
    data (){
        return{
            maiTherapistImage: require('@/assets/mai-therapist-header.png')
        }
    }
}
</script>