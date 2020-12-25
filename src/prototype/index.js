import Vue from 'vue'
import axios from 'axios'
import Loading from '@/components/Loading'

const Mask = Vue.extend(Loading)

const common = {
  install () {
    // function start
    Vue.prototype.$ajax = function (params) {
      return axios({
        url: params.url,
        method: params.method || 'get',
        data: params.data,
      })
    };
    // function end

    // directive start
    Vue.directive('loading', {
      bind (el, binding, vNode) {
        const mask = new Mask({
          el: document.createElement('div'),
          data: {
            loading: !!binding.value
          },
        })
        el.instance = mask
        el.mask = mask.$el
      },
      update (el, binding) {
        if (binding.value) {
          if (!el.style.position) {
            el.style.position = 'relative'
          }
          el.appendChild(el.mask)
          el.instance.visible = true
        } else {
          el.instance.visible = false
          el.removeChild(el.mask)
        }
      }
    });
    // directive end
  }
}
export default common