<template>
  <div class="slideList">
    <swiper
      :options="swiperOption"
      @slideChange="onSlideChange"
      ref="mySwiper"
      @click="onClickSlide"
    >
      <swiper-slide><ListPage01 /></swiper-slide>
      <swiper-slide><ListPage02 /></swiper-slide>
      <swiper-slide><ListPage03 /></swiper-slide>
      <swiper-slide><ListPage06 /></swiper-slide>
      <swiper-slide><ListPage04 /></swiper-slide>
      <swiper-slide><ListPage05 /></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
// import style (<= Swiper 5.x)
import "swiper/css/swiper.css";
import ListPage01 from "@/components/list/ListPage01.vue";
import ListPage02 from "@/components/list/ListPage02.vue";
import ListPage03 from "@/components/list/ListPage03.vue";
import ListPage04 from "@/components/list/ListPage04.vue";
import ListPage05 from "@/components/list/ListPage05.vue";
import ListPage06 from "@/components/list/ListPage06.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    ListPage01,
    ListPage02,
    ListPage03,
    ListPage04,
    ListPage05,
    ListPage06,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperOption: {
        centeredSlides: true,
        effect: "coverflow",
        coverflowEffect: {
          rotate: 55,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        slideToClickedSlide: false,
        slidesPerView: 1.25,
        direction: "vertical",
        spaceBetween: 0,
        mousewheel: true,
        loop: false,
        breakpoints: {
          768: {
            slidesPerView: 1.4,
          },
          1024: {
            slidesPerView: 1.16,
          },
          1200: {
            slidesPerView: 1.1,
            coverflowEffect: {
              stretch: 0,
              depth: 300,
            },
          },
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      var pageIdx = parseInt(this.$store.state.moveToPageIndex);
      this.swiper.slideToLoop(isNaN(pageIdx) ? 0 : pageIdx, 0, false);
    },
    onSlideChange() {
      this.$store.commit(
        "changeMoveToPageIndex",
        parseInt(this.swiper.realIndex)
      );

      window.getApp.$emit("GTAG_SEND_EVENT", {
        action: "change",
        category: "MAIN_SLIDE",
        label: `slide-${this.swiper.realIndex}`,
        value: parseInt(this.swiper.realIndex),
      });
    },
    onClickSlide(e) {
      if (e.target.id != "link") {
        this.$store.commit("moveToPage");

        window.getApp.$emit("GTAG_SEND_EVENT", {
          action: "click",
          category: "MAIN_SLIDE",
          label: `slide-${this.$store.state.moveToPageIndex}`,
          value: this.$store.state.moveToPageIndex,
        });
      } else {
        const parameter =
          this.$store.state.urlPath === ""
            ? ""
            : `?url=${this.$store.state.urlPath}`;

        window.getApp.$emit("GTAG_SEND_EVENT", {
          action: "click",
          category: "selvy",
          label: "simple.selvy.ai",
          value: parameter,
        });

        window.open(`https://simple.selvy.ai/ol${parameter}`, "_blank");
      }
    },
  },
};
</script>