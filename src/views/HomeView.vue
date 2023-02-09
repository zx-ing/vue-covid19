<template>
  <div class="home">
    <Header />
    <CovidInfo :covidInfo="covidInfo" />
    <CaseNum :caseNum="caseNum" />
    <Map />
    <MySwiper />
    <Trip />
    <News :news="news"/>
  </div>
</template>

<script>
import api from "../api"
import Header from "../components/Header.vue"
import CovidInfo from "../components/CovidInfo.vue"
import CaseNum from "../components/CaseNum.vue"
import Map from "../components/Map.vue"
import MySwiper from "../components/MySwiper.vue"
import Trip from "../components/Trip.vue"
import News from "../components/News.vue"


export default {
  name: 'HomeView', 
   data(){
    return{
      convidInfo:{},
      caseNum:{},
      news:[],
    }
  },

    mounted(){
      //只要在父元素里写一个网络请求，然后向其他子元素中传递数据就行了，
      //父传子，在子里用props接收
    api.getNcov({
      key:"62e34ad34025d5d5127135efa58d4ca8"
    }).then(res => {
      if(res === 200){
        //这些数据字段，是从天行数据那边拿到的
        this.ConvidInfo = {
          note1:res.data.newslist[0].desc.note1,
          note2:res.data.newslist[0].desc.note2,
          note3:res.data.newslist[0].desc.note3,
          remark1:res.data.newslist[0].desc.remark1,
          remark2:res.data.newslist[0].desc.remark2,
          remark3:res.data.newslist[0].desc.remark3,
        }
        this.caseNum = {
          //现存确诊人数
          currentConfirmedCount:"",
          //累计确诊人数
          confirmedCount:"",
          //累计境外输入人数
          suspectedCount:"",
          //累计治愈人数
          curedCount:"",
          //累计死亡人数
          deadCount:"",
          //现存无症状人数
          seriousCount:"",
          //新增境外输入人数
          suspectedIncr:"",
          //相比昨天现存确诊人数
          currentConfirmedIncr:"",
          //相比昨天累计确诊人数
          confirmedIncr:"",
          //相比昨天新增治愈人数
          curedIncr:"",
          //相比昨天新增死亡人数
          deadIncr:"",
          //相比昨天现存无症状人数
          seriousIncr:"",
          //相比昨天新增累计确诊人数
          yesterdayConfirmedCountIncr:"",
          //相比昨天境外输入确诊人数
          yesterdaySuspectedCountIncr:"",
        
        },
        this.news = res.data.newslist[0].news
      }
      console.log(res.data);
    }).catch(error =>{
      console.log(error)
    })
  },

  components: {
    Header,
    CovidInfo,
    CaseNum,
    Map,
    MySwiper,
    Trip,
    News
}

}
</script>
