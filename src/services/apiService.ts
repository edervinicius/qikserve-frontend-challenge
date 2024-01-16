import axios from "axios";
import { APP_CONFIG_URL } from "../config"

export const apiService = axios.create({
    baseURL: APP_CONFIG_URL,
});