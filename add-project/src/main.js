import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase/app';
// import "firebase/auth";
import * as fb from "firebase"
import router from './router'
import store from './store'

import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import Vuetify from "vuetify";

Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  firebase,
  created() {
    fb.initializeApp({
      apiKey: "AIzaSyDOCAbC123dEf456GhI789jKl01-MnO",
      authDomain: "itc-ads.firebaseapp.com",
      databaseURL: "https://itc-ads.firebaseio.com",
      projectId: "itc-ads",
      storageBucket: "itc-ads.appspot.com",
      messagingSenderId: "65211879809",
      appId: "1:65211879909:web:3ae38ef1cdcb2e01fe5f0c",
      measurementId: "G-8GSGZQ44ST"
    });
  },

  render: h => h(App)
}).$mount('#app')
