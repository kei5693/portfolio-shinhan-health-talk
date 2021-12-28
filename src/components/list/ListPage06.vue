<template >
  <div class="eventPage">
    <div>
      <img src="~@/assets/images/contents/img_event_page06.png" alt="" />
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