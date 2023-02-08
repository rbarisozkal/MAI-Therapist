// src/middleware/auth.js
import { Auth } from "aws-amplify"
export default function auth({ next, router }) {
  try {
    const user = Auth.currentAuthenticatedUser()
    if (!user) {
      return router.push("/login")
    }
  } catch (error) {
    console.log("error", error)
    return router.push("/login")
  }

  return next()
}
