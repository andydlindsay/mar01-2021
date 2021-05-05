import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: function(callback) {
    return callback(App);
  },
}).$mount('#app')
