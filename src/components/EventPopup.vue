<template>
  <div class="eventBox">
    <transition name="eventDimmedEnter" mode="out-in">
      <div class="eventDimmed" v-if="$store.state.popupToggle"></div>
    </transition>
    <transition name="eventPopupEnter" mode="out-in">
      <div class="eventPopup" v-if="$store.state.popupToggle">
        <div>
          <!-- popup 1 -->
          <div v-if="$store.state.popupChange === 1">
            <div class="content">
              <div class="link">
                <img src="~@/assets/images/event/img_event05.png" alt="" />
                <!-- <img src="~@/assets/images/event/img_event04.png" alt="" /> -->
                <!-- <div class="btn" @click="onClickPopupButton02"></div> -->
              </div>
              <!--
              <img src="~@/assets/images/img_event01_01.png" alt="" />
              <div class="link event1">
                <img src="~@/assets/images/img_event01_02.png" alt="" />
                <div class="btn" @click="onClickPopupButton01"></div>
              </div>
              <div>
                <img src="~@/assets/images/img_event_bottom.png" alt="" />
              </div>
              <div class="link event2">
                <img src="~@/assets/images/img_event01_03.png" alt="">
                <div class="btn" @click="onClickPopupButton02"></div>
              </div>
              -->
            </div>
          </div>
          <!-- //popup 1 -->
          <!-- popup 2 -->
          <div v-else-if="$store.state.popupChange === 2">
            <div class="content">
              <img src="~@/assets/images/event/img_event02.png" alt="" />
            </div>
          </div>
          <!-- //popup 2 -->
          <!-- popup 3 -->
          <div v-else-if="$store.state.popupChange === 3">
            <div class="content">
              <img src="~@/assets/images/event/img_event03.png" alt="" />
            </div>
          </div>
          <!-- //popup 3 -->
          <button
            type="button"
            class="btnClose"
            @click="popupToggle"
            :class="{ type: $store.state.popupChange === 1 }"
          >
            닫기
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      urlPath: `https://simple.selvy.ai/ol`,
    };
  },
  created() {
    const parameter =
      this.$store.state.urlPath === ""
        ? ""
        : `?url=${this.$store.state.urlPath}`;
    this.urlPath += parameter;
  },
  methods: {
    popupToggle() {
      this.$store.commit("popupToggle");
    },
    onClickPopupButton01() {
      window.getApp.$emit("GTAG_SEND_EVENT", {
        action: "click",
        category: "popup",
        label: "EventPopupLink01",
        value: "",
      });
      window.open("http://event-orangelife.co.kr/", "_blank");
    },
    onClickPopupButton02() {
      window.getApp.$emit("GTAG_SEND_EVENT", {
        action: "click",
        category: "popup",
        label: "EventPopupLink02",
        value: "",
      });
      window.open(this.urlPath, "_blank");
    },
  },
};
</script>
<style>
.eventDimmedEnter-enter,
.eventDimmedEnter-leave-to {
  opacity: 0;
}
.eventDimmedEnter-enter-active,
.eventDimmedEnter-leave-active {
  transition: opacity 0.2s;
}
.eventDimmedEnter-leave-active {
  transition-delay: 0.5s;
}

.eventPopupEnter-enter-active {
  top: 100%;
  animation: slide-in 0.5s forwards;
  animation-delay: 0.3s;
}
.eventPopupEnter-leave-active {
  animation: slide-in 0.5s reverse;
}
@keyframes slide-in {
  0% {
    top: 100%;
  }
  70%,
  80% {
    top: -5%;
  }
  100% {
    top: 0%;
  }
}

.link {
  border-radius: 10px;
  overflow: hidden;
}
</style>