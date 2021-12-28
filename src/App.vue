<template>
  <div id="app">
    <!-- <div id="console">{{ $store.state.moveToPageIndex }}/{{ $store.state.headerToggle }}</div> -->
    <router-view />
    <!-- <div id="err"><img src="~@/assets/images/img_notice.png" alt="정상적인 경로가 아닙니다. 경로를 다시 확인해 주시기 바랍니다." /></div> -->
  </div>
</template>

<script>
import GAevent from "./GAevent";
export default {
  data() {
    return {
      
    };
  },
  created() {
    GAevent.forEach((item) => {
      console.log(item);
      this.$on(item.name, item.callback);
    });

    window.getApp = this;

    // ?url=https%253A%252F%252Ftoday.orangelife.co.kr%252Fom%252F3rS7HRWNKf%252Fomcvasm001m.mdv
    // https://today.orangelife.co.kr/om/3rS7HRWNKf/omcvasm001m.mdv
    var getURL = this.getParam("url");
    var decodeURL = decodeURIComponent(decodeURI(getURL));

    //console.log(getURL, decodeURL);

    sessionStorage.setItem("urlPath", decodeURL);
    this.$store.state.urlPath = sessionStorage.urlPath;

    if( this.$store.state.urlPath.indexOf("today.shinhanlife.co.kr") != -1 ){
      this.$store.state.isUrlPath = true;
    }    
  },
  methods: {
    getParam(sname) {
      var params = location.search.substr(location.search.indexOf("?") + 1);
      var sval = "";
      var temp = "";
      params = params.split("&");
      for (var i = 0; i < params.length; i++) {
        temp = params[i].split("=");
        if ([temp[0]] == sname) {
          sval = temp[1];
        }
      }
      return sval;
    },
  },
};
</script>

<style>
#console {
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;
  width: 100px;
  height: 20px;
  background: #f00;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}

/* layout */
html,
body,
#app,
.home {
  height: 100%;
}
#app {
  overflow: hidden;
  min-width: 320px;
}
#err {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
}
#err img {
  width: 100%;
}
.home {
  position: relative;
  overflow: hidden;
  background: #fff;
}
header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 20px;
  box-sizing: border-box;
  background: #fff;
  text-align: left;
  /* background-image: url(./assets/images/header-bg.png); */
  /* background-size: 100% 100%; */
}
header::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 20px;
  width: 42px;
  height: 32px;
  background: url("./assets/images/img_sp01.png") no-repeat 0 0;
  background-size: 1000px 1000px;
  transform: translateY(-50%);
}

header::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0px;
  width: 100%;
  height: 100%;
  background: url("./assets/images/header-right-obj.png") no-repeat 0 0;
  background-size: auto 100%;
  background-position: right top;
}
header h1 img {
  height: 27px;
}
.mainViewPage {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.subViewPage {
  position: absolute;
  top: 0;
  left: 100%;
  width: 100%;
  height: 100%;
}
.mainViewPage,
.subViewPage {
  transition: left 0.5s;
  transition-delay: 0.5s;
}
.home.on .mainViewPage {
  left: -100%;
}
.home.on .subViewPage {
  left: 0;
}

.slideList {
  overflow: hidden;
  position: relative;
  padding: 60px 20px 0;
  box-sizing: border-box;
  height: 100%;
}
.slideList .swiper-container {
  height: 100%;
}
.slideList .swiper-slide {
  font-size: 2rem;
  border-radius: 10px;
}
.slideList .swiper-slide > div,
.slideList .swiper-slide > div > div {
  height: 100%;
}
.slideList .swiper-slide > div .btnView {
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  font-size: 0;
  line-height: 0;
  text-indent: -9999px;
  background: red;
}
.swiper-pagination-bullet {
  background: #6a6a6a !important;
  opacity: 1 !important;
}
.swiper-pagination-bullet-active {
  background: #fff !important;
}
.swiper-slide-shadow-top,
.swiper-slide-shadow-bottom {
  background: transparent !important;
}
.eventPage {
  position: relative; /*top:3px;*/
}
.eventPage > div > img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.eventPage.page1 > #link {
  position: absolute;
  top: 80%;
  left: 0%;
  z-index: 10;
  width: 100%;
  height: 0;
  padding-top: 27%;
  font-size: 0;
  line-height: 0;
  text-indent: -9999px;
}

.flotingEvent {
  position: absolute;
  top: 60vh;
  right: 0%;
  z-index: 200;
  transform: translateX(101%);
  transform-origin: 50% 100%;
}
.flotingEvent.on {
  animation-name: flotingEvent, flotingLoop;
  animation-duration: 0.5s, 4s;
  animation-iteration-count: 1, infinite;
  animation-fill-mode: forwards, forwards;
  animation-timing-function: cubic-bezier(0.65, 0.05, 0.36, 1), ease;
  animation-delay: 0s, 2s;
}
.flotingEvent button {
  width: 60px;
  height: 60px;
  font-size: 0;
  line-height: 0;
  border: 0 none;
  text-indent: -9999px;
  outline: none;
  background: url("./assets/images/img_sp01.png") no-repeat -75px 0;
  background-size: 1000px 1000px;
}
.eventDimmed {
  position: fixed;
  top: 0%;
  left: 0%;
  z-index: 8000;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.eventPopup {
  position: absolute;
  top: 0%;
  left: 0%;
  z-index: 9000;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
}
.eventPopup > div {
  overflow: hidden;
  position: relative;
  height: 100%;
  /* background-color: #fff;
  border-radius: 10px; */
}
.eventPopup > div > div {
  overflow-y: scroll;
  height: 100%;
}
.eventPopup > div > div .content {
  overflow: hidden;
  background-color: #fff;
  border-radius: 20px;
}
.eventPopup .content .link {
  position: relative;
}
.eventPopup .content .link .btn {
  position: absolute;
  top: 85.8%;
  left: 12%;
  width: 76%;
  font-size: 0;
  line-height: 0;
  padding-top: 13%;
}
.eventPopup .content .link.event2 div {
  top: 79%;
}
.eventPopup .content img {
  display: block;
  width: 100%;
}
.eventPopup .btnClose {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 26px;
  height: 26px;
  border: 0 none;
  font-size: 0;
  line-height: 0;
  background: url("./assets/images/img_sp01.png") no-repeat -168px 6px;
  background-size: 1000px 1000px;
}
.eventPopup .btnClose.type {
  background: url("./assets/images/img_sp01.png") no-repeat -168px -20px;
  background-size: 1000px 1000px;
}

.viewPage {
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  background: #fff;
}
.viewPage > button {
  position: absolute;
  top: 18px;
  left: 20px;
  z-index: 1000;
  width: 40px;
  height: 40px;
  border: 0 none;
  font-size: 0;
  line-height: 0;
  text-indent: -9999px;
  background: url("~@/assets/images/img_sp01.png") no-repeat -450px 0px;
  background-size: 1000px 1000px;
  box-sizing: content-box;
}
iframe {
  width: 100%;
}
.viewPage .slideBanner img,
.viewPage .content img {
  display: block;
  width: 100%;
}
.viewPage .link {
  position: relative;
}
.viewPage .link > div {
  position: absolute;
  left: 5%;
  width: 90%;
}
.viewPage .link > div > .btn {
  display: block;
  width: 100%;
  height: 100%;
  border: 0 none;
  background: transparent;
  color: transparent;
  line-height: 0;
  padding-top: 16.8%;
}

.viewPage .link > div > button {
  display: block;
  width: 100%;
  height: 100%;
  border: 0 none;
  background: transparent;
  color: transparent;
  line-height: 0;
  padding-top: 53.8%;
}

.viewPage .link > div > * + * {
  margin-top: 5%;
}
.viewPage.page3 .link > div {
  top: 24%;
}
.viewPage.page4 .link > div {
  top: 89.4%;
}
.viewPage.page5 .link > div {
  top: 94.4%;
}

.viewPage.page6 > .content .header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* height:122px; */
  background: #fff;
  z-index: 1000;
}
.viewPage.page6 > .content .header .titleBox {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 76px;
  border-bottom: 1px solid #c2c2c2;
}
.viewPage.page6 > .content .header .titleBox:after {
  content: "";
  position: absolute;
  top: 50%;
  right: 20px;
  width: 42px;
  height: 32px;
  background: url("~@/assets/images/img_sp01.png") no-repeat 0 0;
  background-size: 1000px 1000px;
  transform: translateY(-50%);
}
.viewPage.page6 > .content .header .titleBox h2 {
  font-size: 23px;
  font-weight: 800;
}
.viewPage.page6 > .content .header .tabTitle {
  display: flex;
  justify-content: space-between;
}
.viewPage.page6 > .content .header .tabTitle > li {
  overflow: hidden;
  position: relative;
  flex: 1 1 0;
  font-size: 18px;
  font-weight: 800;
  color: #bfbfbf;
  text-align: center;
  padding: 10px 0;
}
.viewPage.page6 > .content .header .tabTitle > li.on {
  color: #333;
}
.viewPage.page6 > .content .header .tabTitle > li.on:after {
  content: "";
  position: absolute;
  bottom: -13px;
  left: 50%;
  transform: translateX(-50%);
  width: 34px;
  height: 25px;
  background: url("./assets/images/img_sp01.png") no-repeat 0 0;
  background-size: 1000px 1000px;
  background-position: -601px 0;
}
.viewPage.page6 > .content .header .list {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding: 7px 12px;
  background: #715def;
}
.viewPage.page6 > .content .header > div .list:nth-of-type(2) {
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: 1fr 1fr;
}
.viewPage.page6 > .content .header > div .list:nth-of-type(2) > li {
  white-space: nowrap;
}
.viewPage.page6 > .content .header .list > li {
  height: 26px;
  line-height: 28px;
  padding: 0 10px;
  margin: 4px;
  font-size: 15px;
  font-weight: 400;
  text-align: center;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 13px;
  word-break: break-all;
}
.viewPage.page6 > .content .header .list > li.on {
  color: #715def;
  background: #fff;
}
.viewPage.page6 > .content .tabContents {
  position: relative;
}
.viewPage.page6 > .content .tabContents .content img {
  /* display:none; */
}
.viewPage.page6 > .content .tabContents .content img.on {
  /* display:block; */
}
.viewPage.page6 > .content .btnTop {
  position: absolute;
  bottom: 10px;
  right: 8px;
  width: 50px;
  height: 50px;
  font-size: 0;
  line-height: 0;
  text-indent: -9999px;
  border: 0 none;
  border-radius: 50%;
  box-shadow: 3px 6px 5px rgba(0, 0, 0, 0.3);
  background: url("./assets/images/img_sp01.png") no-repeat 0 0;
  background-size: 1000px 1000px;
  background-position: -700px 0;
}
@media all and (min-width: 768px) {
  #app {
    overflow: hidden;
    background: url("~@/assets/images/bg_tablet.png") no-repeat;
    background-size: 100% 100%;
  }
  #err img {
    width: 768px;
  }
  .home {
    margin: 0 auto;
    overflow: hidden;
  }
  .viewPage {
    margin: 0 auto;
    overflow-y: scroll;
  }
  .eventPopup > div {
    margin: 20px auto;
  }
}
@media all and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .home {
    width: 465px;
  }
}
@media all and (min-width: 1025px) {
  .home {
    width: 680px;
  }
}

@keyframes flotingEvent {
  0% {
    transform: translateX(100%);
  }
  30% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(20%);
  }
  70% {
    transform: translateX(0%);
  }
  90% {
    transform: translateX(10%);
  }
  100% {
    transform: translateX(0%);
  }
}
@keyframes flotingLoop {
  0% {
    transform: rotate(0deg);
  }
  3% {
    transform: rotate(-20deg);
  }
  6% {
    transform: rotate(0deg);
  }
  9% {
    transform: rotate(-12deg);
  }
  12% {
    transform: rotate(0deg);
  }
  15% {
    transform: rotate(-4deg);
  }
  18%,
  100% {
    transform: rotate(0deg);
  }
}
</style>