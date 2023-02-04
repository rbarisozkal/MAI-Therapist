<template>
  <div class="home">
    <Welcome />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Welcome from "@/components/HomePageComponents/Welcome.vue";
export default {
  name: "HomeView",
  components: {
    HelloWorld,Welcome
  },
};
</script>
