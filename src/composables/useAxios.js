import { useAuthStore } from "@/stores/auth"
import axios from "axios"

export const useAxios = () => {
  const axiosInstance = axios.create({
    baseURL: "https://1vfug9rbhd.execute-api.us-east-1.amazonaws.com/default",
  })

  axiosInstance.interceptors.request.use(
    (config) => {
      // Do something before request is sent
      config.headers.Authorization = `Bearer ${
        useAuthStore().user.signInUserSession.accessToken.jwtToken
      }`
      return config
    },
    (error) => {
      // Do something with request error
      return Promise.reject(error)
    }
  )

  axiosInstance.interceptors.response.use(
    (response) => {
      // Do something with response data
      return response
    },
    (error) => {
      // Do something with response error
      return Promise.reject(error)
    }
  )

  return axiosInstance
}
