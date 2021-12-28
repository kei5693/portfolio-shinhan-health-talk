import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    popupToggle: false,    // 팝업 토글
    popupChange: 0,        // 팝업 분기(1번, 2번 팝업)
    moveToPage: false,     // 페이지 전환 애니메이션용 토글
    moveToPageIndex: 0,    // 보여질 페이지 번호
    headerToggle: true,    // 헤더 시간차 등장용
    flag: false,
    urlPath: null,
    isUrlPath: false,
  },
  mutations: {
    changeMoveToPageIndex: (state, value) => {
      state.moveToPageIndex = value;
    },
    popupChange: (state, value) => {
      state.popupChange = value;
    },
    popupToggle: (state) => {
      state.popupToggle = !state.popupToggle;
      if (state.popupToggle) {
        window.getApp.$emit("GTAG_SEND_EVENT", {
          action: "click",
          category: "popup",
          label: "EventPopupClick",
          value: state.popupToggle,
        });
      }
    },
    moveToPage: (state) => {
      // 페이지 이동 이벤트 진행중 방어코드 
      if (state.flag) { return }
      state.flag = true;
      setTimeout(() => {
        state.flag = false;
      }, 1000);

      state.moveToPage = !state.moveToPage;

      if (!state.headerToggle) {
        setTimeout(() => {
          state.headerToggle = true;
        }, 1000);
      } else {
        state.headerToggle = !state.headerToggle;
      }

    },
  },
  actions: {
  },
  modules: {
  }
})
