// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import MintUI from 'mint-ui'
import Verify from 'vue-verify-plugin'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
// 移动端延迟
import fastclick from 'fastclick';
fastclick.prototype.focus = function (targetElement) {
  let length;
  if (targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
      length = targetElement.value.length;
      targetElement.focus();
      targetElement.setSelectionRange(length, length);
  } else {
      targetElement.focus();
  }
};
fastclick.attach(document.body);
// import {Toast,MessageBox,DatetimePicker} from 'mint-ui'
import axios from 'axios'
import Vuex from 'vuex'
import '@/assets/css/base.css'
import './index.css'
import '@/api/api.js'


Vue.use(ElementUI)
Vue.use(MintUI)
Vue.use(router)
Vue.use(Vuex)
Vue.use(Verify)
// Vue.use(Toast,MessageBox,DatetimePicker)
// Vue.component(DatetimePicker.name, DatetimePicker);
Vue.prototype.$http = axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
