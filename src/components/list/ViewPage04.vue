<template>
  <div class="viewPage page4">
    <div class="content">
      <img src="~@/assets/images/contents/img_page04_banner01.png" alt="" />
      <img src="~@/assets/images/contents/img_page04_txt01.png" alt="" />
      <div class="link">
        <img src="~@/assets/images/contents/img_page04_txt02.png" alt="" />
        <div><div class="btn" @click="onClickButton01"></div></div>
      </div>
    </div>
    <button type="button" @click="moveToPage()">back</button>
  </div>
</template>
<script>
export default {
  methods: {
    moveToPage() {
      this.$store.commit("moveToPage");
    },
    onClickButton01() {
      window.getApp.$emit("GTAG_SEND_EVENT", {
        action: "click",
        category: "DETAIL_BUTTON",
        label: "DETAIL_BUTTON_03-01",
        value: "",
      });
      window.open("https://healthtalkmagazine.modoo.at/?link=ddz47a4f", "_blank");
    },
  },
};
</script>
<style>
</style>