<template>
  <div class="about">
    <Pricing/>
  </div>
</template>

<script>
// @ is an alias to /src
import Pricing from '@/components/AboutComponents/Pricing.vue'
export default {
  name: 'AboutView',
  components: {
    Pricing,
  },
}
</script>