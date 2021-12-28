<template >
  <div class="eventPage">
    <div>
    <!-- <div @click="moveToPage(pageIndex)"> -->
      <img src="~@/assets/images/contents/img_event_page02.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  props : {
    pageIndex : Number,
  },
  methods: {
    moveToPage() {
      this.$store.commit('moveToPage');
    },
  },
}
</script>