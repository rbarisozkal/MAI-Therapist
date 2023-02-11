<template>
  <div class="pricing-card">
    <v-card height="80%">
      <v-card-title class="header">
        Pricing
      </v-card-title>
      <v-container class="plan-card">
        <v-row>
          <v-col :key="(pricing, idx)" v-for="(pricing, idx) in cards">
            <PricingCard :key="idx" :pricing="pricing" />
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
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
        price: 5,
        currency: "$",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        recommended: false,
      },
      {
        type: "Expanded",
        title: "Expanded",
        price: 10,
        currency: "$",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        recommended: true,
      },
      {
        type: "Premium",
        title: "Premium",
        price: 50,
        currency: "$",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        recommended: false,
      },
    ],
  }),
};
</script>

<style scoped lang="scss">
.plan-card {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  width: 90%;
}

.pricing-card {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
}

.header {
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: xx-large;
  font-weight: bold;
}
</style>
