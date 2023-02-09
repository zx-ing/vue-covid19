<template>
  <div class="case-num">
    <div class="container">
        <div class="title">
            <span>截止 2020-12-30 19:22:33 全国数据统计</span>
        </div>
    </div>
    <div class="num">
        <ul class="count">
            <li class="create-item">
                <div class="create-count">
                    <b>较昨日 <em style="color:rgb(247, 76, 49)">{{ numZore(caseNum.currentConfirmedIncr)}}</em></b>
                </div>
                <strong style="color:rgb(247, 76, 49)"> {{ caseNum.currentConfirmedCount}} </strong>
                <span>现存确诊</span>
            </li>
            <li class="create-item">
                <div class="create-count">
                    <b>较昨日 <em style="color:rgb(247, 76, 49)">{{caseNum.confirmedIncr}}</em></b>
                </div>
                <strong style="color:rgb(247, 76, 49)"> {{caseNum.confirmedCount}} </strong>
                <span>累计确诊</span>
            </li>
            <li class="create-item">
                <div class="create-count">
                    <b>较昨日 <em style="color:rgb(247, 76, 49)">200</em></b>
                </div>
                <strong style="color:rgb(247, 76, 49)"> 4000 </strong>
                <span>现存确诊</span>
            </li>
            <li class="create-item">
                <div class="create-count">
                    <b>较昨日 <em style="color:rgb(247, 76, 49)">200</em></b>
                </div>
                <strong style="color:rgb(247, 76, 49)"> 4000 </strong>
                <span>现存确诊</span>
            </li>
            <li class="create-item">
                <div class="create-count">
                    <b>较昨日 <em style="color:rgb(247, 76, 49)">200</em></b>
                </div>
                <strong style="color:rgb(247, 76, 49)"> 4000 </strong>
                <span>现存确诊</span>
            </li>
            <li class="create-item">
                <div class="create-count">
                    <b>较昨日 <em style="color:rgb(247, 76, 49)">200</em></b>
                </div>
                <strong style="color:rgb(247, 76, 49)"> 4000 </strong>
                <span>现存确诊</span>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
     //从HomeView里拿数据，属于父传子，用props
  props:{
    caseNum:{
      type:Object,
      default:()=>{
        return {}
      }
    }
  },
  methods:{
    numZore(num) {
        return num >= 0 ? + '+' + num : num
    }
  }

}
</script>

<style>

</style>