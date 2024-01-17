
// import braidPic from './pic/index.vue'
import braidTxt from './txt/index.vue'
import barCode from './bar-code/index.vue'
import table from './table/index.vue'
import image from './image/index.vue'
import html from './html/index.vue'
import descriptions from './descriptions/index.vue'


const install = function (Vue) {
  Vue.component(descriptions.name, descriptions)
  Vue.component(braidTxt.name, braidTxt)
  Vue.component(barCode.name, barCode)
  Vue.component(table.name, table)
  Vue.component(image.name, image)
  Vue.component(html.name, html)
}

const getWidgetsSetting = function () {
  return {
    [descriptions.name]: descriptions.setting,
    [braidTxt.name]: braidTxt.setting,
    [barCode.name]: barCode.setting,
    [table.name]: table.setting,
    [image.name]: image.setting,
    [html.name]: html.setting,
  }
}
export default {
  install,
  getWidgetsSetting
}
