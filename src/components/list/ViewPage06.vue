<template>
  <div class="viewPage page6" ref="viewPage">
    <div class="content">
      <!-- header -->
      <div class="header" ref="header">
        <div class="titleBox"><h2>헬스톡 건강가이드</h2></div>
        <ul class="tabTitle">
          <li
            v-for="(tabTitle, tabTitleIdx) in tabDataLists"
            :key="`tabTitle${tabTitleIdx}`"
            :class="{ 'on' : activeTitle == tabTitleIdx}"
            @click="changeTitle(tabTitleIdx)"
          >
            {{tabTitle.title}}
          </li>
        </ul>
        <div>
          <ul class="list"
            v-for="(tabContent, tabContentsIdx) in tabDataLists"
            :key="`tabContent${tabContentsIdx}`"
            v-show="activeTitle == tabContentsIdx"
          >
            <li
              v-for="(subTitle, subTitleIdx) in tabContent.subTitle"
              :key="`subTitle${subTitleIdx}`"
              :class="{ 'on' : activeContents == subTitleIdx}"
              @click="changeContents(subTitleIdx)"
            >
              {{'#'+subTitle}}
            </li>
          </ul>
        </div>
      </div>
      <!-- //header -->
      <!-- tabContents -->
      <div class="tabContents" ref="tabContents">
        <div
          v-for="(tabContent, tabContentsIdx) in tabDataLists"
          :key="`tabContent${tabContentsIdx}`"
          v-show="activeTitle == tabContentsIdx"
          >
            <div class="content">
              <!-- <img
                alt=""
                v-for="(tabVisual, tabVisualIdx) in tabContent.images"
                :key="`tabVisual${tabVisualIdx}`"
                :class="{ 'on' : activeContents == tabVisualIdx}"
                :src="`${tabVisual}`"
              > -->
              
              <img :src="`${tabContent.images[activeContents]}`" alt="">
            </div>
            <img src="~@/assets/images/guide/img_common.jpg" alt="">
        </div>
      </div>
      <!-- //tabContents -->
      <button type="button" @click="scrollTop()" class="btnTop">top</button>
    </div>
    <button type="button" @click="moveToPage()">back</button>
  </div>
</template>
<script>
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

export default {
  data(){
    return {
      tabDataLists:[
        {
          title: '질병 가이드',
          subTitle:[
            '당뇨병',
            '심장질환',
            '뇌졸중',
            '치매',
            '간암',
            '대장암',
            '위암',
            '폐암',
            '유방암',
            '전립선암'
          ],
          images: [
            require('@/assets/images/guide/img_0101.jpg'),
            require('@/assets/images/guide/img_0102.jpg'),
            require('@/assets/images/guide/img_0103.jpg'),
            require('@/assets/images/guide/img_0104.jpg'),
            require('@/assets/images/guide/img_0105.jpg'),
            require('@/assets/images/guide/img_0106.jpg'),
            require('@/assets/images/guide/img_0107.jpg'),
            require('@/assets/images/guide/img_0108.jpg'),
            require('@/assets/images/guide/img_0109.jpg'),
            require('@/assets/images/guide/img_0110.jpg'),
          ]
        },
        {
          title: '운동 가이드',
          subTitle:[
            '연령별 가이드',
            '운동 형태별 가이드'
          ],
          images: [
            require('@/assets/images/guide/img_0201.jpg'),
            require('@/assets/images/guide/img_0202.jpg'),
          ]
        },
        {
          title: '식이 가이드',
          subTitle:[
            '당뇨병',
            '심장질환',
            '뇌졸중',
            '치매',
            '간암',
            '대장암',
            '위암',
            '폐암',
            '유방암',
            '전립선암'
          ],
          images: [
            require('@/assets/images/guide/img_0301.jpg'),
            require('@/assets/images/guide/img_0302.jpg'),
            require('@/assets/images/guide/img_0303.jpg'),
            require('@/assets/images/guide/img_0304.jpg'),
            require('@/assets/images/guide/img_0305.jpg'),
            require('@/assets/images/guide/img_0306.jpg'),
            require('@/assets/images/guide/img_0307.jpg'),
            require('@/assets/images/guide/img_0308.jpg'),
            require('@/assets/images/guide/img_0309.jpg'),
            require('@/assets/images/guide/img_0310.jpg'),
          ]
        },
      ],
      activeTitle: 0,
      activeContents: 0,
    }
  },
  mounted(){
    window.addEventListener("resize", this.resizeEvent, true);
    this.resizeEvent();
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeEvent);
  },
  methods: {
    moveToPage() {
      this.$store.commit("moveToPage");
    },
    onClickButton01() {
      window.getApp.$emit("GTAG_SEND_EVENT", {
        action: "click",
        category: "DETAIL_BUTTON",
        label: "DETAIL_BUTTON_05-01",
        value: "",
      });
      window.open(
        "https://www.orangelife.co.kr/bizxpress/home/bs/bt/bt/scwbsbt060m.shtm",
        "_blank"
      );
    },
    changeTitle(index){
      this.activeTitle = index;
      this.activeContents = 0;
      this.resizeEvent();
      this.resetScroll();
    },
    changeContents(index){
      this.activeContents = index;
      this.resetScroll();
    },
    scrollTop(){
      this.$refs.viewPage.scrollTo({
        top : 0,
        behavior: "smooth"
      });
    },
    resetScroll(){
      this.$refs.viewPage.scrollTop = 0;
    },
    resizeEvent(){
      setTimeout(() => {
        var height = this.$refs.header.clientHeight;
        this.$refs.tabContents.style.paddingTop = height+'px';
      }, 10);
    },
  },
}
</script>