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
      html += '<th width="30" style="height: '+ (style.LineHeight||0) + '">'
    } else {
      html += '<th style="height: '+ (style.LineHeight||0) + '">'
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
          html += '<td style="height: '+ (style.LineHeight||0) + '">'
          html += (idx + 1)
        } else {
          html +=  '<td style="height: '+ (style.LineHeight||0) + '">'
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

export const taskListTempTohtml = (valueAttr,data,style) => {
  const resoltEachObj = {
    1: '处理中',
    2: '通过',
    3: '不通过',
    4: '退回'
  }
  // 表格全局样式
  let styleStr = 'text-align:' + style.Alignment + ';'
  styleStr += 'font-size:' + style.FontSize + 'pt;'
  styleStr += 'color:' + (style.FontColor? style.FontColor : '#000000') + ';'
  // 这个 valueAttr 是默认值，在建立模版时展示 实际打印值使用 data
  const dataList = data? data : valueAttr

  let html = '<style> table td,table th {word-break: break-all;box-sizing:border-box} table{borderTop:1px} p{margin:0}</style>'
  html += '<table border=1 width=\'100%\' cellspacing=\'0\' frame="box" cellpadding=\'2\' style=\'border-collapse:collapse;' + styleStr +  '\'>'
  // 解析表头
  html += '<thead></thead><tbody>'


  dataList.forEach(item => {
    html += "<tr><td style='width: 25%;borderBottom: 1px;'>";
    html += "<div style='margin-bottom:1pt;font-size:" + (style.FontSize * 100 + 50) / 100 + 'pt' + "'>" + (item?.assigneeUser?.nickname ? item.assigneeUser?.nickname : '') + "</div>";
    html += "<div style='font-size:" + (style.FontSize * 100 - 50) / 100 + 'pt' + "'>" + (item?.assigneeUser?.deptName ? item.assigneeUser.deptName : '') + "</div>";
    html += "</td><td style='borderBottom: 1px;'>";
    html += "<div style='white-space:pre-wrap;margin-bottom:1pt;font-size:" + (style.FontSize * 100 - 50) / 100 + 'pt' + "'>" + (item?.reason ? item.reason : '') + "</div>";
    html += "<div style='margin-bottom:1pt;font-size:" + (style.FontSize * 100 - 50) / 100 + 'pt' + "'>" + "接收人：<span style='margin-right: 1pt'>" + (item?.name ? item.name : '') + "</span></div>";
    html += "<div style='margin-bottom:1pt;font-size:" + (style.FontSize * 100 - 50) / 100 + 'pt' + "'>" + (item?.endTime ? parseTime(item.endTime) : '') + "<span style='margin-right: 1pt'>[" + (item?.result ? resoltEachObj[item.result] :'') + "]</span>" + "</div>";
    html += "</td>";
    html += "</tr>";
  });


  // let newDataList = []
  // dataList.forEach((item,ins)=>{
  //   if( !newDataList[Math.floor(ins / 2)] ){
  //     newDataList[Math.floor(ins / 2)] = []
  //   }
  //   if(ins % 2 === 0){
  //     newDataList[Math.floor(ins / 2)].push({ ...item })
  //   }else{
  //     newDataList[Math.floor(ins / 2)].push({ ...item })
  //   }
  //
  //   if(ins === dataList.length - 1){
  //     newDataList[Math.floor(ins / 2)].length === 1 ? newDataList[Math.floor(ins / 2)].push({}) : ''
  //   }
  // })
  // newDataList.forEach(item => {
  //   const item1 = item[0]
  //   const item2 = item[1]
  //   html += "<tr><td style='width: 12%;borderBottom: 1px;'>";
  //   html += "<div style='margin-bottom:1pt;font-size:" + (style.FontSize * 100 + 50) / 100 + 'pt' + "'>" + (item1?.assigneeUser?.nickname ? item1.assigneeUser?.nickname : '') + "</div>";
  //   html += "<div style='font-size:" + (style.FontSize * 100 - 50) / 100 + 'pt' + "'>" + (item1?.assigneeUser?.deptName ? item1.assigneeUser.deptName : '') + "</div>";
  //   html += "</td><td style='borderBottom: 1px;'>";
  //   html += "<div style='white-space:pre-wrap;margin-bottom:1pt;font-size:" + (style.FontSize * 100 - 50) / 100 + 'pt' + "'>" + (item1?.reason ? item1.reason : '') + "</div>";
  //   html += "<div style='margin-bottom:1pt;font-size:" + (style.FontSize * 100 - 50) / 100 + 'pt' + "'>" + "接收人：<span style='margin-right: 1pt'>" + (item1?.name ? item1.name : '') + "</span></div>";
  //   html += "<div style='margin-bottom:1pt;font-size:" + (style.FontSize * 100 - 50) / 100 + 'pt' + "'>" + (item1?.endTime ? parseTime(item1.endTime) : '') + "<span style='margin-right: 1pt'>[" + (item1?.result ? resoltEachObj[item1.result] :'') + "]</span>" + "</div>";
  //   html += "</td>";
  //
  //   if(item2?.assigneeUser){
  //     html += "<td style='width: 12%;borderBottom: 1px;'>";
  //     html += "<div style='margin-bottom:1pt;font-size:" + (style.FontSize * 100 + 50) / 100 + 'pt' + "'>" + (item2?.assigneeUser?.nickname ? item2.assigneeUser?.nickname : '') + "</div>";
  //     html += "<div style='font-size:" + (style.FontSize * 100 - 50) / 100 + 'pt' + "'>" + (item2?.assigneeUser?.deptName ? item2.assigneeUser.deptName : '') + "</div>";
  //     html += "</td><td style='borderBottom: 1px;'>";
  //     html += "<div style='white-space:pre-wrap;margin-bottom:1pt;font-size:" + (style.FontSize * 100 - 50) / 100 + 'pt' + "'>" + (item2?.reason ? item2.reason : '') + "</div>";
  //     html += "<div style='margin-bottom:1pt;font-size:" + (style.FontSize * 100 - 50) / 100 + 'pt' + "'>" + "接收人：<span style='margin-right: 1pt'>" + (item2?.name ? item2.name : '') + "</span></div>";
  //     html += "<div style='margin-bottom:1pt;font-size:" + (style.FontSize * 100 - 50) / 100 + 'pt' + "'>" + (item2?.endTime ? parseTime(item2.endTime) : '') + "<span style='margin-right: 1pt'>[" + (item2?.result ? resoltEachObj[item2.result] :'' )+ "]</span>" + "</div>";
  //     html += "</td>";
  //   }else{
  //     html += "<td></td>";
  //   }

    // html += "</tr>";
  // });

  html += '<tbody>'
  html += '</table>'


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

  let html = '<style> table td,table th {height:100%;word-break: break-all;box-sizing:border-box;border:1px solid ' + style.BorderColor + '} </style>'
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

