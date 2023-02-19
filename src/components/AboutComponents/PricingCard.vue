<template>
    <div
      class="rounded-xl p-5 sm:p-6 md:p-8 lg:p-12"
      :class="
        pricing.recommended
          ? 'recommended-price'
          : 'notrecommended-price'
      "
    >
      <div class="mt-5">
        <h2 class="font-bold text-3xl">{{ pricing.title }}</h2>
      </div>
      
  
      <div class="currency">
        <span>{{ pricing.currency }}</span>
        <span>{{ pricing.price }}</span>
      </div>
  
      <div v-for="item in pricing.description" class="text">{{ item }}</div>
  
      <div class="bottom-button">
        <v-btn
          rounded="pill"
          color="#32de84"
          @click="$router.push('/register')"
        >
          Buy {{ pricing.title }}
        </v-btn>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PricingCard",
    props: {
      pricing: {
        default: () => ({}),
        required: true,
      },
    },
  };
  </script>
  
<style scoped lang="scss">

.recommended-price {
  background-color: transparent;
  border: 0.3vh solid #007FFF;
}

.notrecommended-price {
  background-color: transparent;
  border: 0.1vh solid grey;
}

.currency{
  font-size: 2rem;
  margin-bottom: 5vh;
}

.text{
  font-size: 1.2rem;
  margin-top: 1vh;
}
.bottom-button {
  position: relative;
  margin-top: 20%;
  margin-bottom: 10%;
}
</style>