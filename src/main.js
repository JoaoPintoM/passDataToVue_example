// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false;

const divs = document.querySelectorAll('.qCharts');

divs.forEach(el => {
  const dataAttributs = el.dataset
  /* eslint-disable no-new */
  new Vue({
    el: el,
    components: {App},
    data() {
      return {
        dataAttributs
      }
    },
    template: '<App :dataAttributs="dataAttributs" />'
  })

})


