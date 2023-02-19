<template>
   <v-app>
  <div class="pricing-container">
    <v-card >
      <v-card-title class="header">
        PRICING
      </v-card-title>
        <v-row  class="pricing-cards">
          <v-col :key="(pricing, idx)" v-for="(pricing, idx) in cards">
            <PricingCard :key="idx" :pricing="pricing" />
          </v-col>
        </v-row>
    </v-card>
  </div>
  </v-app>
</template>
  
<script>
import PricingCard from "./PricingCard.vue";
export default {
  name: "Pricing",
  components: { PricingCard },
  data: () => ({
    cards: [
      {
        type: "Basic",
        title: "Basic",
        price: 10,
        currency: "$",
        description: ["Save 20 clients","Get 50 analyses"],
        recommended: false,
      },
      {
        type: "Expanded",
        title: "Expanded",
        price: 15,
        currency: "$",
        description: ["Save 100 clients","Get 500 analyses"],
        recommended: true,
      },
      {
        type: "Premium",
        title: "Premium",
        price: 25,
        currency: "$",
        description: ["Save unlimited clients","Get unlimited analyses"],
        recommended: false,
      },
    ],
  }),
};
</script>

<style scoped lang="scss">
.pricing-cards {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120vh;
  margin: 10vh;
}

.pricing-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.header {
  margin-top: 5vh;
  margin-bottom: 3vh;
  font-size: xx-large;
  font-weight: bold;
}
</style>
