import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: "http://study.zmyfrank.com:18010/api",
    timeout: 10000,
});

export default axiosInstance;