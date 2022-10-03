/** Vue main script */
import Vue from 'vue';
import { markRaw } from "vue";

import router from '@/router';
import store from '@/store/index.bkp';
import vuetify from './plugins/vuetify';
import teleport from 'vue2-teleport';
import { createPinia, PiniaVuePlugin } from 'pinia'

import App from '@/App.vue';

Vue.use(PiniaVuePlugin)
const pinia = createPinia()

Vue.config.productionTip = false;
Vue.component('Teleport', teleport);

new Vue({
  render: h => h(App),
  vuetify,
	pinia,
  router,
}).$mount('#app');
