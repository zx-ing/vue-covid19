<template>
  <div>
    <h3>疫情期间出行防疫政策</h3>
    <Cascader label="出发城市" :options="options" @onValue="getFromCity"/>
    <Cascader label="到达城市" :options="options" @onValue="getToCity"/>
    <van-button type="info" block>查看政策</van-button>
    
  </div>
</template>

<script>
import Cascader from './Cascader.vue';
import api from '../api'

export default {
    data(){
        return{
            options:[]
        }
    },
    components:{
        Cascader,
    },
    mounted(){
        api.getCitys({
            key:'171e165a7d991c5f6ecd5194c54778ef'
        }).then(res =>{
            var currentAll = [];
            for(var i = 0;i<res.data.result.length;i++){
                var arr = [];
                for(var j = 0;j<res.data.result[i].citys.length;j++){
                    var temp2 = {
                        text:res.data.result[i].citys[j].city,
                        value:res.data.result[i].citys[j].city_id,
                    }
                    arr.push(temp2);
                }
                var temp1 = {
                    text:res.data.result[i].province,
                    value:res.data.result[i].province_id,
                    children:arr,
                }
                currentAll.push(temp1)
            }
            this.options = currentAll
        }).catch(error =>{
            console.log(error);
        })
    },
    methods:{
        getFromCity(){

        },
        getToCity(){
            
        }
    }
};
</script>

<style></style>
