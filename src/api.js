import axios from "axios"

export const api = axios.create({
    baseURL: "https://auth-blog-platform-server.onrender.com"
})
