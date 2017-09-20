// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Login from './Login'
import 'animate.css'
import Directives from '@/util/directives'

import BootstrapVue from 'bootstrap-vue'
import VeeValidate from 'vee-validate'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VeeValidate)

Directives(Vue) // 모든 글로벌 디렉티브 초기화

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Login/>',
  components: { Login }
})