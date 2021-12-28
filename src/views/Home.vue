<template>
  <div
    class="home"
    :class="{ 'on': $store.state.moveToPage }"
  >
    <div class="mainViewPage">
      <Header />
      <SlideList />
      <FloatingEvent />
    </div>
    <div class="subViewPage">
      <!-- 신규 페이지 생성으로 순서 변경됨 123654 -->
      <ViewPage01 v-if="$store.state.moveToPageIndex === 0" />
      <ViewPage02 v-if="$store.state.moveToPageIndex === 1" />
      <ViewPage03 v-if="$store.state.moveToPageIndex === 2" />
      <ViewPage06 v-if="$store.state.moveToPageIndex === 3" />
      <ViewPage04 v-if="$store.state.moveToPageIndex === 4" />
      <ViewPage05 v-if="$store.state.moveToPageIndex === 5" />
    </div>
    <EventPopup />
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import SlideList from "@/components/SlideList.vue"
import FloatingEvent from "@/components/FloatingEvent.vue"
import EventPopup from "@/components/EventPopup.vue"
import ViewPage01 from "@/components/list/ViewPage01.vue"
import ViewPage02 from "@/components/list/ViewPage02.vue"
import ViewPage03 from "@/components/list/ViewPage03.vue"
import ViewPage04 from "@/components/list/ViewPage04.vue"
import ViewPage05 from "@/components/list/ViewPage05.vue"
import ViewPage06 from "@/components/list/ViewPage06.vue"

export default {
  components: {
    Header,
    SlideList,
    FloatingEvent,
    EventPopup,
    ViewPage01,
    ViewPage02,
    ViewPage03,
    ViewPage04,
    ViewPage05,
    ViewPage06
  },
}
</script>