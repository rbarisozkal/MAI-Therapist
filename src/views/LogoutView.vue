<template>
  <div>Logging out</div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth"

const auth = useAuthStore()

auth.signOut()
</script>

<style lang="scss" scoped></style>
