<template>
  <div>
    <h3>省市疫情数据</h3>
  </div>
</template>

<script>
import api from "../api"
export default {
    mounted(){
        api.getCityNcov({
            city:this.cityName
        }).then(res =>{
            var citys = [];
            for(let i = 0;i<res.data.retdata.subList.length;i++){
                var temp = {
                    name:res.data.retdata.subList[i].city + '市',
                    value:res.data.retdata.subList[i].curConfirm
                }
                citys.push(temp)
            }
            this.$charts.cityMap('city',citys,this.cityName)
        }).catch(error =>{
            console.log(error);
        })
    }
}
</script>

<style>

</style>