<template>
  <div>
    <h3>全国</h3>
    <swiper ref="MySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item, index) in swiperData" :key="index">
        <img :src="item.image" />
      </swiper-slide>
    </swiper>
    <ul>
      <li
        :class="{ active: index === currentIndex }"
        v-for="(item, index) in swiperData"
        :key="index"
        @click="clickItemHandle(index)"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "Swiper/Swiper-bundles.css";
import api from "../api";

export default {
  data() {
    let _this = this;
    return {
      swiperData: [],
      currentIndex: 0,
      swiperOptions: {
        on: {
          slideChangeTransitionEnd: function () {
            _this.currentIndex = this.activeIndex; //切换结束时，告诉我现在是第几个slide
          },
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {
    api
      .getSwiperImg()
      .then((res) => {
        if (res.data.status === 200) {
          this.swiperData = res.data.result;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed:{
    swiper(){
        return this.$refs.mySwiper.$swiper;
    }
  },
  methods: {
    clickItemHandle(index) {
        this.currentIndex = index;
        this.swiper.slideTo(index,1000,false)
    },
  },
};
</script>

<style></style>
