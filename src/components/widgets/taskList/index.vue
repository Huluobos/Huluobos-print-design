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
      }"
      style="position:absolute;overflow:hidden">
      <div style="height:100%;width: 100%;">
        <div style="display: flex;flex-direction: column">
          <div  v-for="(item, index) in (val.valueAttr || val.defaultValue)" :key="index" style=" width: 100%;display: flex;flex-direction: row;border-bottom: 1px dashed #ddd;padding: 10px;box-sizing: border-box;position: relative;">
            <div class="lz-left" v-if="item.assigneeUser" style=" display: flex;flex-direction: column;margin-right: 6%;min-width: 15%;">
              <span>{{ item.assigneeUser.nickname || '' }}</span>
              <span>{{ item.assigneeUser.deptName || '' }}</span>
            </div>
            <div class="lz-right" style="display: flex;flex-direction: column;margin-right: 4%;">
              <span>{{ item.reason || '' }}</span>
              <span>接收人：<i style="margin-right: 5px">{{ item.name }}</i></span>
              <span><i style="margin-right: 5px">{{ item.endTime ? parseTime(item.endTime) : '' }} [<a v-text="stateComp(item.result)"></a>]</i></span>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
const WIDGET_NAME = 'braid-taskList'

export default {
  name: WIDGET_NAME,
  setting: {
    type: WIDGET_NAME,
    isEdit: true,
    dragable: true, // 是否可拖拽
    resizable: true, // 尺寸是否可变
    width: 690,
    height: 307,
    left: 50,
    top: 10,
    title: 'taskList',
    valueAttr: [],
    defaultValue: [

    ],
    name: '',
    style: {
      zIndex: 0,
      Alignment: 'left', // 对齐方式 1--左靠齐 2--居中 3--右靠齐
      FontSize: 9,
      AutoHeight: false, // 高度自动（模板在该元素位置以下的元素都关联打印）
      BottomMargin: 0, // 距离下边距
      Offset2Top: 0, // 设置次页向上偏移
    },
  },
  props: [
    'val', // 文本对象
  ],
  computed: {
    stateComp() {
      const resoltEachObj= {
          1: '处理中',
          2: '通过',
          3: '不通过',
          4: '退回'
      }
      return (item) => {
        return resoltEachObj[item]
      }
    }
  },
  methods:{
    parseTime(time, pattern) {
      if (arguments.length === 0 || !time) {
        return null
      }
      const format = pattern || '{y}-{m}-{d} {h}:{i}:{s}'
      let date
      if (typeof time === 'object') {
        date = time
      } else {
        if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
          time = parseInt(time)
        } else if (typeof time === 'string') {
          time = time.replace(new RegExp(/-/gm), '/').replace('T', ' ').replace(new RegExp(/\.[\d]{3}/gm), '');
        }
        if ((typeof time === 'number') && (time.toString().length === 10)) {
          time = time * 1000
        }
        date = new Date(time)
      }
      const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
      }
      const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
        let value = formatObj[key]
        // Note: getDay() returns 0 on Sunday
        if (key === 'a') {
          return ['日', '一', '二', '三', '四', '五', '六'][value]
        }
        if (result.length > 0 && value < 10) {
          value = '0' + value
        }
        return value || 0
      })
      return time_str
    },
  }
}
</script>

