import axios from "../utils/request"
import base from "./base"

const api = {
    // 获取病毒信息数据
    getNcov(params){
        return axios.get(base.baseUrl + base.ncov,{
            params
        })
    },
    // 各个省市疫情数据
    getProvinceNcov(){
        return axios.get(base.baseUrl + base.provinceNcov)
    },
    //世界疫情数据
    getWorldNcov(){
        return axios.get(base.baseUrl + base.worldNcov)
    },
    getCityNcov(params){
        return axios.get(base.baseUrl + base.cityNcov,{
            params
        })
    },
    getSwiperImg(){
        return axios.get(base.baseUrl + base.swiperImg)
    },
    getCitys(params){
        return axios.get(base.baseUrl + base.citys,{
            params
        })
    }
}

export default api;