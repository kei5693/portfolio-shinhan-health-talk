<template>
  <div class="viewPage">
    <div class="slideBanner">
      <swiper
        :options="swiperOption"
        ref="mySwiper"
      >
        <swiper-slide><img src="~@/assets/images/contents/img_page02_banner01.png" alt=""></swiper-slide>
        <swiper-slide><img src="~@/assets/images/contents/img_page02_banner02.png" alt=""></swiper-slide>
        <swiper-slide><img src="~@/assets/images/contents/img_page02_banner03.png" alt=""></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="content">
      <img src="~@/assets/images/contents/img_page02_txt01.png" alt="">
      <img src="~@/assets/images/contents/img_page02_txt02.png" alt="">
    </div>
    <button type="button" @click="moveToPage()">back</button>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      swiperOption: {
        slideToClickedSlide: false,
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheel: false,
        loop: true,
        autoHeight: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
      },
    }
  },
  methods: {
    moveToPage(){
      this.$store.commit('moveToPage');
    },
  },
}
</script>