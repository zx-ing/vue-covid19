import axios from "axios"
import { config } from "process"
import qs from "querystring"

const errorHandle = (status,info) => {
    switch(status){
        case 400:
            console.log("语义有误");
            break;
        case 401:
            console.log("服务器认证失败");
            break;
        case 403:
            console.log("服务器拒绝访问");
            break;
        case 404:
            console.log("地址错误");
            break;
        case 500:
            console.log("服务器遇到意外");
            break;
        case 502:
            console.log("服务器无响应");
            break;
        default:
            console.log(info);
            break;

    }
}

// 1.创建网络请求的实例对象
const instance = axios.create({
    timeout:5000,
    // baseURL:"http://iwenwiki.com"
})

// 2.处理请求拦截和响应拦截

//请求拦截
instance.interceptors.request.use(
    config =>{
        if(config.method === "post"){
            config.data = qs.stringify(config.data)
        }
        return config;
    },
    error => Promise.reject(error)
)

//响应拦截
instance.interceptors.response.use(
    response => response.status === 200 ? Promise.resolve(response) : Promise.reject(response),
    error =>{
        const{ response } = error;
        // 写一个错误处理方法
        errorHandle(response.status,response.info);
    }
 )

 export default instance;
