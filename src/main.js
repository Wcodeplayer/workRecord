import Vue from 'vue'
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';
import vuex from 'vuex'
import store from './store/index.js'

Vue.config.productionTip = false

Vue.use(Antd);
Vue.use(vuex);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')