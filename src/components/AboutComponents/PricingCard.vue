<template>
    <div
      class="bg-transparent rounded-xl p-5 sm:p-6 md:p-8 lg:p-12"
      :class="
        pricing.recommended
          ? 'border-4 border-blue-400	'
          : 'border border-slate-100'
      "
    >
      <div class="mt-5 mb-5">
        <h2 class="font-bold text-3xl">{{ pricing.title }}</h2>
      </div>
      
  
      <div class="font-regular text-xl mt-3 tracking-wide">
        <span style="font-size: 200%">{{ pricing.currency }}</span>
        <span style="font-size: 200%">{{ pricing.price }}</span>
      </div>
  
      <div class="text-xs opacity-50 mt-2">{{ pricing.description }}</div>
  
      <div class="flex justify-center align-center mt-10 mb-10">
        <v-btn
          rounded="pill"
          color="secondary"
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
  
  <style lang="scss"></style>