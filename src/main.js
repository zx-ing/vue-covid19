import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import "./assets/css/common.css"
import Echarts from './plugins/echarts'
import "../node_modules/echarts/map/js/china"
import "../node_modules/echarts/map/js/world"
import Tabs from "./components/tabs"
import "./plugins/vant"

Vue.use(Tabs)
Vue.use(Echarts)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
