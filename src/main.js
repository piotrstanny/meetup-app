import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import AlertCmp from './components/Shared/Alert.vue'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VCarousel,
  VToolbar,
  VCard,
  VDivider,
  VImg,
  VForm,
  VTextField,
  VTextarea,
  VDatePicker,
  VTimePicker,
  VAlert,
  VProgressCircular,
  transitions
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VCarousel,
    VToolbar,
    VCard,
    VDivider,
    VImg,
    VForm,
    VTextField,
    VTextarea,
    VDatePicker,
    VTimePicker,
    VAlert,
    VProgressCircular,
    transitions
  },
  theme: {
    primary: '#01579B',
    secondary: '#455A64',
    accent: '#388E3C',
    error: '#f44336',
    warning: '#ffeb3b',
    info: '#546E7A',
    success: '#4caf50'
  }
})

Vue.config.productionTip = false
Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyD7wsryxLwyRXK901L1C0Jj6gisCIG7yCs',
      authDomain: 'meetupapp-f32b4.firebaseapp.com',
      databaseURL: 'https://meetupapp-f32b4.firebaseio.com',
      projectId: 'meetupapp-f32b4',
      storageBucket: 'meetupapp-f32b4.appspot.com'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadMeetups')
  }
})
