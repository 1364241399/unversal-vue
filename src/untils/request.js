import axios from "axios";
import {getToken} from "./auth";
import {tansParams} from "./unversal"
import cache from '@/plugins/cache'
import errorCode from '@/untils/errorCode'
import { ElMessage, ElMessageBox, ElNotification } from "element-plus"; 

// 是否显示重新登录
export let isRelogin = { show : false }
 
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded' ; 	//headers need to be an array or else

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, //'https://reqres.in'  // or your api base url  //baseURL
    timeout: 10000
})

// 请求拦截器，用作请求token添加和防止数据重复提交
service.interceptors.request.use(config =>{
    // 是否需要设置token
    const isToken = (config.headers || {}).isToken === false
    // 是否需要防止数据重复提交
    const isRequestSubmit = (config.params || {}).isRequestSubmit === false

    if(getToken() && !isToken){
        // 让每个请求携带自定义token 请根据实际情况自行修改
        config.headers['Authorization'] = 'Bearer'+ getToken() 
    }
    // get请求映射params参数
    if(config.method === 'get' && config.params){
        let url = config.url + '?' + tansParams(config.params);
        url = url.slice(0, -1)
        config.params = {}
        config.url = url;
    }
    if(!isRequestSubmit && (config.method === 'post' || config.method === 'put')){
        const requestObj = {
            url : config.url,
            data: typeof config.data === 'object' ? JSON.stringify(config.data) : config.data,
            time: new Date().getTime()
        }
        const sessionObj = cache.session.getJSON('sessionObj')
        if(!sessionObj){
            cache.session.setJSON('sessionObj',requestObj)
        }else{
            const s_url = sessionObj.url;      //请求地址
            const s_data = sessionObj.data;    //请求数据
            const s_time = sessionObj.time;    //请求时间
            const interval = 1000;             //间隔时间，小于此时间视为重复提交
            if(s_url === requestObj.url && s_data === requestObj.data && requestObj.time - s_time< interval)  { 
                const message = '数据正在处理，请勿重复提交'
                console.log(`[${s_url}]`+message)
                return Promise.reject(new Error(message))
            }else{
                cache.session.setJSON('sessionObj',requestObj) 	//保存请求地址和请求数据到缓存中
            }
        }
    }
    return config;
}, error => {
    console.log(error)  //Error message or stack trace
    Promise.reject(error)

})

// // 响应拦截器
service.interceptors.response.use(res =>{
    // 未设置状态码则默然成功状态
    const code = res.data.code || 200;
    // 获取错误信息
    const msg = errorCode[code] || res.data.msg || errorCode['default']
    // 二进制数据则直接返回
    if(res.request.responseType === 'blob' || res.request.responseType === 'arraybuffer'){
        return res.data
    }
    if(code === 401){
         if(!isRelogin.show){
            isRelogin.show = true;
            ElMessageBox.confirm('登陆状态以过期，您可以继续留在该页面，或者重新登陆',{
                confirmButtonText: '重新登陆',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() =>{
                isRelogin.show = false; 	//用户确认回复页面时，隐藏弹窗并将页面跳转到
                this.$store.dispatch('LogOut').then(()=>{
                    location.href = "/index"
                }).catch(
                    isRelogin.show = false
                )
            }).catch(() => {
                isRelogin.show = false; 	//用户取消回复页面时，隐藏弹窗并将页面跳转到
            });
         }
         return Promise.reject("无效的会话，或者会话已过期，请重新登陆")
    }else if(code === 500){
        ElMessage({
            message : msg,
            type: 'error'
        })
        return Promise.reject('error')
    }else if(code !== 200){
        ElNotification.error({
            message : msg,
        })
        return Promise.reject('error')
    }else{
        return res.data; 	// 只有code为200的时候才有意义，主要是因为在传输层没有返回数据的情况下，一些类似于jqXHR的响应类型是没有数据的，这些情况下只能使用一种方式获取数据。
    }
}, error =>{
    console.log(error); 	// 执行执行error回调函数的错误处理程序。如果没有可用于此函数的error回调函数，则应显示错误消息。该函数应该在请求时返回
    let { message } = error;
    if( message == "Network Error"){
        message = "后端接口连接异常"
    }else if(message.includes("timeout")){
        message = "系统接口异常超时"
    }else if(message.includes("Request failed with status code")) {
        message = "系统接口" + message.substr(message.length - 3) + "异常";
      }
      ElMessage({
        message: message,
        type: 'error',
        duration: 5*1000
      })
    return Promise.reject(error)	// 如果没有可用于此函数的error回调函数，则应显示错误
})
export default service