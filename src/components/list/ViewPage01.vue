<template>
  <div class="viewPage">
    <youtube video-id="xJaLIB3KzQ0" ref="youtube"></youtube>
    <div class="content">
      <img src="~@/assets/images/contents/img_page01_txt01.png" alt="" />
    </div>
    <button type="button" @click="moveToPage()">back</button>
  </div>
</template>
<script>
import Vue from "vue";
import VueYoutube from "vue-youtube";
Vue.use(VueYoutube);

export default {
  mounted() {
    //this.playVideo();
  },
  methods: {
    moveToPage() {
      this.$store.commit("moveToPage");
      this.$refs.youtube.player.stopVideo();
    },
    playVideo() {
      this.$refs.youtube.player.playVideo();
      window.getApp.$emit("GTAG_SEND_EVENT", {
        action: "click",
        category: "youtube",
        label: "play",
        value: "",
      });
    },
  },
};
</script>