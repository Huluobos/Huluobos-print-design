/**
 * 通过模板和模板数据生成打印内容
 * @param temp 打印模板
 * @param data 模板数据
 */
export const tempToPrint = (temp, data) => {
  let printContent = temp.map(item => {
    var reg = /({[^{]*})/g
    let value = item.value.replace(reg, data[item.name] || '')
    return {
      top: item.top,
      left: item.left,
      width: item.width,
      height: item.height,
      value: value
    }
  })
  return printContent
}
/**
 * braid-tabel类型的模板转换成html
 * @param columns 表格列配置信息
 * @param data 表格数据
 */
export const tableTempTohtml = (columns, data, style) => {
  // 表格全局样式
  let styleStr = 'text-align:' + style.Alignment + ';'
  styleStr += 'font-size:' + style.FontSize + 'pt;'
  styleStr += 'color:' + style.FontColor + ';'


  let html = '<style> table td,table th {word-break: break-all;box-sizing:border-box;border:1px solid ' + style.BorderColor + '}</style>'
  html += '<table border=1 width=\'100%\' cellspacing=\'0\' frame="box" cellpadding=\'2\' style=\'border-collapse:collapse;' + styleStr + '\' bordercolor=\'' + style.BorderColor + '\'>'
  // 解析表头
  html += '<thead><tr>'
  columns.forEach(column => {

    if (column.name === '_seq') { // 序号列
      html += '<th width="30">'
    } else {
      html += '<th>'
    }
    html += column.title
    html += '</th>'
  })
  html += '</tr></thead>'
  html += '<tbody>'

  // 解析内容
  if (Array.isArray(data)) {
    data.forEach((item, idx) => {

      html += '<tr>'
      columns.forEach(column => {
        if (column.name === '_seq') {
          html += '<td>'
          html += (idx + 1)
        } else {
          html += '<td>'
          html += item[column.name] || ''
        }
        html += '</td>'
      })
      html += '</tr>'
    })
  }

  html += '</tbody>'
  html += '</table>'
  return html
}

export const taskListTempTohtml = (printItem) => {
  const resoltEachObj = {
    1: '处理中',
    2: '通过',
    3: '不通过',
    4: '退回'
  }
  const valueAttr = printItem.valueAttr ? printItem.valueAttr : []
  const defaultValue = printItem.defaultValue ? printItem.defaultValue : []
  const style = printItem.style
  let html = ''
  html += "<div style=\"height:" + (printItem.height + 'px') + ";width: " + printItem.width + 'px'
    + ";text-align:" + style.Alignment + ";font-size:" + style.FontSize + 'pt' + "\">"
  html += "<div style=\"display: flex;flex-direction: column\">"
  valueAttr.forEach(item => {
    html += "<div style=\"width: 100%;display: flex;flex-direction: row;border-bottom: 1px dashed #000;padding: 2%;box-sizing: border-box;position: relative;\">"
    html += "<div style=\"display: flex;flex-direction: column;margin-right: 6%;min-width: 15%;\">"
    html += "<span>" + (item.assigneeUser.nickname ? item.assigneeUser.nickname : '') + "</span>"
    html += "<span>" + (item.assigneeUser.deptName ? item.assigneeUser.deptName : '') + "</span>"
    html += "</div>"
    html += "<div style=\"display: flex;flex-direction: column;margin-right: 4%;\">"
    html += "<span>" + (item.reason ? item.reason : '') + "</span>"
    html += "<span>接收人：<i style=\"margin-right: 5px\">" + (item.name ? item.name : '') + "</i></span>"
    html += "<span><i style=\"margin-right: 5px\">" + (item.endTime ? parseTime(item.endTime) : '') + "[<a>" + (resoltEachObj[item.result]) + "</a>]" + "</i></span>"
    html += "</div>"
    html += "</div>"
  })
  html += "</div>"
  html += "</div>"
  return html
}
/**
 * braid-descriptions类型的模板转换成html
 */
export const descriptionsTempTohtml = (attr, data, style) => {
  // 表格全局样式
  let styleStr = 'text-align:' + style.Alignment + ';'
  styleStr += 'font-size:' + style.FontSize + 'pt;'
  styleStr += 'color:' + style.FontColor + ';'

  let html = '<style> table td,table th {height:100%;ord-break: break-all;box-sizing:border-box;border:1px solid ' + style.BorderColor + '} </style>'
  if (!style.AutoHeight) {
    html += '<style>table{height:100%}</style>'
  }
  html += '<table border="1" width="100%" cellspacing="0" frame="box" cellpadding="2" style="height:' + style.height + 'px;border-collapse:collapse;' + styleStr + '" bordercolor="' + style.BorderColor + '">'
  html += '<thead></thead><tbody>'
  attr.forEach(each => {

    html += '<tr>'
    each.forEach(item => {
      let span = Number(item.span)
      html += '<th colspan="1" style="padding: ' + style.Padding + '">'
      html += item.label
      html += '</th>'
      html += '<td ' + 'colspan="' + span + '" style="padding: ' + style.Padding + '"><span>'
      html += data[item.name] || "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
      html += '</span></td>'
    })
    html += '</tr>'
  })
  html += '</tbody></table>'
  return html
}

/**
 * braid-image类型的模板转换成html
 * @param value 图片相对地址
 */
export const imageTempTohtml = (value) => {

  let html = '<img style="width:100%" src="' + value + '"/>'

  return html
}

/**
 * 将字符串模板中{}内的内容替换成指定值
 * @param str 表格列配置信息
 * @param value 表格数据
 */
export const strTempToValue = (str, value) => {
  let reg = /({[^}^{]*})/g
  return str.replace(reg, (value || value === 0) ? value : '')
}
export const htmlTempTohtml = (val, style) => {
  // 表格全局样式
  let styleStr = 'text-align:' + style.Alignment + ';'
  styleStr += 'font-size:' + style.FontSize + 'pt;'
  styleStr += 'color:' + style.FontColor + ';'
  let html = '<span style="' + styleStr + '">'
  html += val
  html += '</span>'
  return html
}


// 日期格式化
export function parseTime(time, pattern) {
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
}

