<template>
  <transition name="header">
    <header v-if="$store.state.headerToggle" class="header-con">
      <div class="bg rect"></div>
      <div>
        <h1>
          <img
            src="~@/assets/images/img_header_title.png"
            alt="당신을 위한 건강이야기 Health Talk"
          />
        </h1>
      </div>
    </header>
  </transition>
</template>
<script>
export default {
  methods: {
    headerToggle() {
      this.$store.commit("headerToggle");
    },
  },
};
</script>
<style>
.header-enter-active {
  animation: header-in 0.4s reverse ease;
}
.header-leave-active {
  animation: header-in 0.4s forwards ease;
}
@keyframes header-in {
  0% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(10%);
  }
  100% {
    transform: translateY(-100%);
  }
}

.bg.rect {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: calc(100% - 60px);
  background-color: rgba(93, 136, 251, 0.25);
}

.bg.rect::after {
  position: absolute;
  right: -60px;
  top: 0;
  content: "";
  width: 0;
  height: 0;
  border-top: 60px solid rgba(93, 136, 251, 0.25);
  border-right: 60px solid transparent;
}
</style>