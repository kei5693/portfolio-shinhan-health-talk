import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/reset.css';
import VueGtag from 'vue-gtag'


Vue.config.productionTip = false

Vue.use(VueGtag, {
  config: {
    id: 'G-EHQJ3VC0V1'   // Google Analytics의 Tracking ID를 넣어준다
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
