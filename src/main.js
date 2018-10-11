import Vue from 'vue'
import App from './App'
import router from './router'
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
    transitions
  },
  theme: {
    primary: '#546E7A',
    secondary: '#78909C',
    accent: '#388E3C',
    error: '#f44336',
    warning: '#ffeb3b',
    info: '#546E7A',
    success: '#4caf50'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
