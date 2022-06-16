import Vue from 'vue'
import App from './App.vue'
import {debounce} from 'lodash'

Vue.config.productionTip = false

const debouncedChange = (el, delay) => {
  return debounce(() => {
    el.dispatchEvent(new Event('change'))
  }, delay)
}

Vue.directive('focus', {
  inserted(el) {
    el.focus();
  } 
})

Vue.directive('truncate', function (el, binding) {
  el.style.overflow = 'hidden'
  el.style.display = '-webkit-box'
  el.style.cursor = 'pointer'
  el.style['-webkit-box-orient'] = 'vertical'
  el.style['-webkit-line-clamp'] = binding.value
})

Vue.directive('debounce', {
  bind(el, binding) {
    const delay = binding.value
    el.addEventListener('input', debouncedChange(el, delay))
  },
  unbind(el) {
    el.removeEventListener('input', debouncedChange())
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')