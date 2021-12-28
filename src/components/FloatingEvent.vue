<template>
  <div class="flotingEvent" :class="{ 'on': active }">
    <button type="button" @click="popupChange(1)">이벤트<br>확인</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      active: false,
    }
  },
  methods:{
    popupChange(index){
      this.$store.commit('popupChange', index)
      this.$store.commit('popupToggle')
    },
    flotingToggle(){
      setTimeout(() => {
        this.active = !this.active;
      }, 500);
    }
  },
  mounted(){
    this.active ? this.active = false : this.flotingToggle()
  },
}
</script>