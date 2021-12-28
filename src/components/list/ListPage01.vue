<template >
  <div class="eventPage page1">
    <div>
    <!-- <div @click="moveToPage(page)"> -->
      <img src="~@/assets/images/contents/img_event_page01.png" alt="">
    </div>
    <div id="link" @click.self="onClickLink">미래질병 예측하러 가기</div>
  </div>
</template>
<script>
export default {
  methods: {
    moveToPage() {
      this.$store.commit('moveToPage');
    },
    onClickLink() {
      console.log('page click');
      // window.open("https://simple.selvy.ai/ol?url=****", "_blank");
    }
  },
}
</script>