import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';
import currencyFilter from './filters/currency';
import dateFilter from './filters/date';

import VeeValidate from 'vee-validate'; // 表單驗證
import zhTWValidate from 'vee-validate/dist/locale/zh_TW';// 表單驗證


Vue.config.productionTip = true;



import '@/permission'; // permission control



VeeValidate.Validator.localize('zh_TW', zhTWValidate);
Vue.use(VeeValidate);
Vue.component('Loading', Loading);
Vue.filter('currency', currencyFilter);
Vue.filter('date', dateFilter);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
