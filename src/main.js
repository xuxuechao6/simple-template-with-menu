import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import '@/assets/styles/index.scss' // global css

import '@/assets/icons' // icon

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')