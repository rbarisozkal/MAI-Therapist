<template>
  <div class="text-center">
    <v-btn
      color="orange-darken-2"
      @click="openSnackbar('This is a snackbar message')"
    >
      Open Snackbar
    </v-btn>

    <teleport to="#snackbar-container">
      <v-snackbar v-model="snackbar" :timeout="timeout">
        {{ text }}

        <template v-slot:actions>
          <v-btn color="blue" variant="text" @click="closeSnackbar">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </teleport>
  </div>
</template>

<script>
import useSnackbar from "./useSnackbar.js"

export default {
  setup() {
    const { snackbar, text, timeout, openSnackbar, closeSnackbar } =
      useSnackbar()

    return {
      snackbar,
      text,
      timeout,
      openSnackbar,
      closeSnackbar,
    }
  },
}
</script>
