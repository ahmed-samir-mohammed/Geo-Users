// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'
import firebase from 'firebase'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDuCMJm06d5BcjKXdb_54ieVMqXcpEiUPQ',
    libraries: 'places', 
  },
})

Vue.config.productionTip = false

// wait for firebase auth to init before creating the app
let app = null

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
