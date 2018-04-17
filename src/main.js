// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#qCharts',
  components: { App },
  created: function () {
    // console.log(this.$el.getAttribute('data-client-id'))
  },
  mounted: function () {
    console.log(this.$el.getAttribute('data-client-id'))
  },
  template: '<App/>'
})
