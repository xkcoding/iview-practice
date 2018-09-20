import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/iview.js'
import CustomLayout from "components/common/custom-layout";

Vue.config.productionTip = false

Vue.component("custom-layout", CustomLayout);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
