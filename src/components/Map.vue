<template>
  <div>
    <p class="title"><i></i>疫情地图</p>
    <tabs :currentIndex="currentIndex" @onIndex="getIndexHandle">
      <tab index="chinaMap" label="中国地图"><div class="map" id="map"></div></tab>
      <tab index="worldMap" label="世界地图"></tab>
    </tabs>
    
  </div>
</template>

<script>
import Tab from '../../../vue-tabs-demo/src/components/tabs/tab.vue'
import tabs from '../../../vue-tabs-demo/src/components/tabs/tabs.vue'
import api from "../api"

export default {
  components: { tabs, Tab },
  data(){
    return{
      currentIndex:"chinaMap"
    }
  },
  method:{
    getIndexHandle(index){
      this.currentIndex = index
    }
  },
    mounted(){
        api.getProvinceNcov().then(res =>{
          // data:[{ name:"",value:"" }]
            console.log(res.data);
            let allCitys = [];
            for(let i = 0;i < res.data.retdata.length;i++){
              var temp = {
                name:res.data.retdata[i].xArea,
                value:res.data.retdata[i].curConfirm
              }
              allCitys.push(temp)
            }
            this.$charts.chinaMap('map',allCitys)
        }).catch(error => {
            console.log(error);
        })

        api.getWorldNcov().then(res =>{
          let allCitys = [];
            for(let i = 0;i < res.data.retdata.length;i++){
              var temp = {
                name:res.data.retdata[i].xArea,
                value:res.data.retdata[i].curConfirm
              }
              allCitys.push(temp)
            }
            this.$charts.chinaMap('map',allCitys)
        }).catch(error => {
            console.log(error);
        })
        
    }

}
</script>

<style scoped>
  .map{
    width: 375px;
    height: 400px;
  }

</style>