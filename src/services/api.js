import axios from "axios";

const api = axios.create({
  baseURL: "https://maiiapi.glitch.me/",
});

export default api;