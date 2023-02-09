<template>
  <div class="info">
    <p class="title">
        <i></i>
        病毒信息
    </p>
    <div class="content">
      <p> {{ConvidInfo.note1}} </p>
      <p> {{ConvidInfo.note2}} </p>
      <p> {{ConvidInfo.note3}} </p>
      <p> {{ConvidInfo.remark1}} </p>
      <p> {{ConvidInfo.remark2}} </p>
      <p> {{ConvidInfo.remark3}} </p>
    </div>
  </div>
</template>

<script>
import api from "../api"

export default {
 
  //从HomeView里拿数据，属于父传子，用props
  props:{
    covidInfo:{
      type:Object,
      default:()=>{
        return {}
      }
    }
  }
 
}
</script>
  
<style scoped>
  .info{
    padding: 0.16rem;
    background: #fff;
    border-bottom: 1px solid #f1f1f1;
  }
  .title{
    font-size: 0.17rem;
  
  }
  .title i{
    display: inline-block;
    width: 0.04rem;
    height: 0.16rem;
    margin-right: 0.03rem;;
    vertical-align: middle;
    background: #4169e2;
  }
  .content{
    padding: 0.06rem 0.16rem;

  }
  .content p{
    font-size: 13px;
    margin: 5px 0;
  }
</style>