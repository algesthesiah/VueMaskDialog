import VueMaskDialog from './VueMaskDialog'

VueMaskDialog.install = function(Vue) {
  Vue.component(VueMaskDialog.name, VueMaskDialog)
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueMaskDialog)
}

export default VueMaskDialog
