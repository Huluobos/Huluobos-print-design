<template>
  <div
      class="widgets"
      :style="{
     left: val.left + 'px' ,
      top:  val.top + 'px',
      width: val.width + 'px',
      height: val.height + 'px',
      textAlign: val.style.Alignment,
      fontSize: val.style.FontSize + 'pt',
      color: val.style.FontColor,
    }"
      style="position:absolute;overflow:hidden"
  >
    <table border="1" width="100%" cellspacing="0" cellpadding="2" style="border-collapse:collapse;" :height="val.height" bordercolor="#000000">
      <tbody>
      <tr v-for="(item,index) in (val.valueAttr || val.defaultValue)" :key="index+'des'">
        <template v-for="(each,ins) in item">
          <th colspan="1" :key="index+'desth' + ins" >
            <div >{{ each.label }}</div>
          </th>
          <td :colspan="each.span" :key="index+'destd' + ins" >
            <div>{{ each.name }}</div>
          </td>
        </template>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import style from "@/components/panel/style.vue";

const WIDGET_NAME = 'braid-descriptions'

export default {
  name: WIDGET_NAME,
  setting: {
    type: WIDGET_NAME,
    isEdit: false,
    dragable: true, // 是否可拖拽
    resizable: true, // 尺寸是否可变
    width: 690,
    height: 307,
    left: 50,
    top: 10,
    title: 'descriptions',
    valueAttr: [],
    defaultValue: {

    },
    name: '',
    style: {
      zIndex: 0,
      Alignment: 'left', // 对齐方式 1--左靠齐 2--居中 3--右靠齐
      FontSize: 9,
      FontColor: '#000000',
      BorderColor: '#000000',
      AutoHeight: false, // 高度自动（模板在该元素位置以下的元素都关联打印）
      BottomMargin: 0, // 距离下边距
    },
  },
  props: [
    'val', // 文本对象
  ],
  computed: {
    style() {
      return style
    },
    colNum() {
      let col = this.val.column * 2
      return col
    },
  },
}
</script>

