import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://3.38.191.164/",
  headers: { "Content-Type": "application/json" },
});
