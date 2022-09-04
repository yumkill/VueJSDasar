import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


/** Module yang dipakai */
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import jQuery from 'jquery'
window.$ = jQuery

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

/** CLEAN BLOG TEMPLATE BOOTSTRAP */
import '@/assets/css/styles.css'
import '@/assets/js/scripts.js'

createApp(App).use(router).mount('#app')
