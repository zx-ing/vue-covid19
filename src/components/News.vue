<template>
  <div class="news">
    <div class="card">
        <ul class="list">
            <li class="item" v-for="(item,index) in news" :key="index">
                <div class="tag">{{ item.pubDateStr }}</div>
                <div class="content">
                    <div class="title">{{ item.title }}</div>
                    <p>{{ item.summary }}</p>
                </div>
                <a :href="item.sourceUrl">&gt;</a>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        news:{
            type:Array,
            default:() =>{
                return []
            }
        }
    }
}
</script>

<style>

</style>