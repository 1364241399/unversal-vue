import axios from "axios";
 
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded' ; 	//headers need to be an array or else

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, //'https://reqres.in'  // or your api base url  //baseURL
    timeout: 10000
})

service.interceptors.request.use(config =>{
    return config;
})

export default service