import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Car from './Car.vue'

Vue.config.productionTip = false
// Vue.component('app-car', Car);

export const eventEmitter = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
  // render: function(h) {
  //   return h(App)
  // }
}).$mount('#app')



