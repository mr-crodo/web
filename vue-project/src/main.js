import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vuelidate from "vuelidate/src"
import VueRouter from 'vue-router'
import App from './App.vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from "./routes";

//Vue router
Vue.use(VueRouter)

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
//Vuelidate
Vue.use(Vuelidate)

new Vue({
  el: '#app',
  render: h => h(App),
  // render: function(h) {
  //   return h(App)
  // }
  router
}).$mount('#app')



