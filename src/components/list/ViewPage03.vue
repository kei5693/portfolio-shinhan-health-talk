<template>
  <div class="viewPage page3">
    <div class="content">
      <img src="~@/assets/images/contents/img_page03_banner01.png" alt="" />
      <img src="~@/assets/images/contents/img_page03_txt01.png" alt="" />
      <div class="link" v-if="$store.state.isUrlPath">
        <img src="~@/assets/images/contents/img_page03_txt03.png" alt="" />
        <div>
          <!-- <div class="btn" @click="onClickButton01"></div> -->
          <!-- <div class="btn" @click="onClickButton02"></div> -->
          <button @click="onClickButton04">popup4</button>
        </div>
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
    popupChange(index) {
      this.$store.commit("popupChange", index);
      this.$store.commit("popupToggle");
    },
    onClickButton01() {
      window.getApp.$emit("GTAG_SEND_EVENT", {
        action: "click",
        category: "DETAIL_BUTTON",
        label: "DETAIL_BUTTON_02-01",
        value: "",
      });
      window.open(
        "https://www.orangelife.co.kr/bizxpress/home/ap/vi/scwapvi260m.shtm",
        "_black"
      );
    },
    onClickButton02() {
      window.getApp.$emit("GTAG_SEND_EVENT", {
        action: "click",
        category: "DETAIL_BUTTON",
        label: "DETAIL_BUTTON_02-02",
        value: "",
      });
      window.open(
        "https://www.orangelife.co.kr/bizxpress/home/ap/ch/scwapch020m.shtm",
        "_black"
      );
    },
    onClickButton03() {
      window.getApp.$emit("GTAG_SEND_EVENT", {
        action: "click",
        category: "DETAIL_BUTTON",
        label: "DETAIL_BUTTON_02-03",
        value: "",
      });
      this.popupChange(2);
    },
    onClickButton04() {
      window.getApp.$emit("GTAG_SEND_EVENT", {
        action: "click",
        category: "DETAIL_BUTTON",
        label: "DETAIL_BUTTON_02-04",
        value: "",
      });

      // '오늘'에서 접속 했다면 링크 이동, 아니면 숨김
      if( this.$store.state.isUrlPath ) {
        window.open(
          this.$store.state.urlPath,
          "_black"
        );
      }
    },
  },
};
</script>