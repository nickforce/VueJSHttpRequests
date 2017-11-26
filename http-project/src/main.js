// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// AXIOS
// import Vue from 'vue'
// import App from './App'

// Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
// vue-resource
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(App)
})
