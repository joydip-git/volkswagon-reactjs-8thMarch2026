import axios from "axios";
import { PRODUCT_API_URL } from "./constants";

const axiosInstance = axios.create({
    baseURL: PRODUCT_API_URL,
    timeout: 1000,
    timeoutErrorMessage: 'Request timed out'
})

export default axiosInstance