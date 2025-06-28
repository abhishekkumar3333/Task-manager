import axios from "axios";
import { config } from "../config";

 export const ApiClient = axios.create({
  baseURL: config.BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type" : "application/json",
    "Authorization" : "Bearer Token"
  }
});  

