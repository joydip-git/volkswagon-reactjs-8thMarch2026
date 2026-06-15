import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos'
const axiosInstance = axios.create({
    baseURL: url,
    timeout: 1000,
    timeoutErrorMessage: 'request could not be completed',
})

axiosInstance.interceptors.request.use(
    (request) => {
        request.headers.Authorization = `Bearer abcd`
        console.log(request.headers);
        return request
    }
)
axiosInstance.interceptors.response.use(
    (response) => {
        console.log(response.data);
        return response
    }
)
export default axiosInstance