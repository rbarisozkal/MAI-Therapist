import { ref } from "vue"

const useSnackbar = () => {
  const snackbar = ref(false)
  const text = ref("")
  const timeout = 5000

  const openSnackbar = (newText) => {
    text.value = newText
    snackbar.value = true
  }

  const closeSnackbar = () => {
    snackbar.value = false
  }

  return {
    snackbar,
    text,
    timeout,
    openSnackbar,
    closeSnackbar,
  }
}

export default useSnackbar
