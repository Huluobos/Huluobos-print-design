/**
 * 出库单 模板设计选项
 */
export const OutStockOptions = [
  {
    "type": "braid-descriptions",
    "title": "描述列表",
    "name": "feeDetail",
    "value": "{描述列表}",
    "isEdit": true,
    "column": 3,
    "size": "small",
    "border": true,
    "valueAttr": [[{"label": "商户名称", "value": "{商户名称}", "name": "traderName", "span": 3}, {"label": "品牌", "value": "{品牌}", "name": "brandName", "span": 1}], [{"label": "证件号码", "value": "{证件号码}", "name": "traderCode", "span": 3}, {"label": "铺位名称", "value": "{铺位名称}", "name": "shopName", "span": 1}], [{"label": "费用名称", "value": "{费用名称}", "name": "feeName", "span": 1}, {"label": "费用内容", "value": "{费用内容}", "name": "feeMarkName", "span": 1}, {"label": "应收金额", "value": "{应收金额}", "name": "receivable", "span": 1}], [{"label": "金额大写", "value": "{金额大写}", "name": "moneyUppercase", "span": 3}, {"label": "实收金额", "value": "{实收金额}", "name": "payment", "span": 1}], [{"label": "缴费期限", "value": "{缴费期限}", "name": "start_EndDate", "span": 5}], [{"label": "备注", "value": "{备注}", "name": "remark", "span": 5}]]
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "自定义文本",
    value: "",
  },
  {
    type: "braid-image",
    title: "二维码",
    value: "http://192.168.7.229/syy/file/files/view/5f9fb42dabebb4049ffbd019"
  },
  {
    "type": "braid-descriptions",
    "title": "描述列表",
    "name": "feeDetail",
    "value": "{描述列表}",
    "isEdit": true,
    "column": 3,
    "size": "small",
    "border": true,
    "valueAttr": [[{"label": "商户名称", "value": "{商户名称}", "name": "traderName", "span": 3}, {"label": "品牌", "value": "{品牌}", "name": "brandName", "span": 1}], [{"label": "证件号码", "value": "{证件号码}", "name": "traderCardNo", "span": 3}, {"label": "合同号", "value": "{合同号}", "name": "contractNo", "span": 1}], [{"label": "所属商场", "value": "{所属商场}", "name": "mallName", "span": 1}, {"label": "铺位名称", "value": "{铺位名称}", "name": "shopName", "span": 1}, {"label": "面积", "value": "{面积}", "name": "useArea", "span": 1}], [{"label": "缴费类型", "value": "{缴费类型}", "name": "feeName", "span": 1}, {"label": "缴费期限", "value": "{缴费期限}", "name": "start_EndDate", "span": 3}], [{"label": "应收单价", "value": "{应收单价}", "name": "price", "span": 1}, {"label": "应收金额", "value": "{应收金额}", "name": "receivable", "span": 1}, {"label": "实收金额", "value": "{实收金额}", "name": "payment", "span": 1}], [{
      "label": "金额大写",
      "value": "{金额大写}",
      "name": "moneyUppercase",
      "span": 3
    }, {"label": "金额小写", "value": "{金额小写}", "name": "payment", "span": 1}], [{"label": "缴费明细", "value": "{缴费明细}", "name": "feeMarkName", "span": 5}], [{"label": "备注", "value": "{备注}", "name": "remark", "span": 5}]]
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "时间",
    value: "{dateTime}",
    name: "dateTime",
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "编号",
    value: "编号：{dateTime}",
    name: "id",
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "经办人",
    value: "经办人:{creatorName}",
    name: "creatorName",
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "收款人",
    value: "收款人:{creatorName}",
    name: "creatorName",
  },
  //
  // 第一页
  {
    type: "braid-html",
    title: "分页1",
    isEdit: true,
    value: "{第1页/共3页}",
    defaultValue: "<font ><span tdata='pageNO'>第1页</span>/<span tdata='pageCount'>共3页</span></font>",
    style: {ItemType: 2, BottomMargin: 8,}
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "自定义文本",
    value: "温馨提示：在您提供发票、收据时，请您同时索要“发票（收据）交接单 ”",
    defaultValue: "温馨提示：在您提供发票、收据时，请您同时索要“发票（收据）交接单 ”"
  },
  {type: "braid-txt", isEdit: true, title: "标题", value: "{statementTitle}", name: "statementTitle",},
  {type: "braid-txt", isEdit: true, title: "结算单号", value: "结算单号:{id}", name: "id", defaultValue: '结算单号'},
  {
    type: "braid-txt",
    isEdit: true,
    title: "合同号",
    value: "合同号 : {contractNo}",
    name: "contractNo",
    defaultValue: '合同号'
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "结算年月",
    value: "结算年月 : {month}",
    name: "month",
    defaultValue: '结算年月'
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "结算部门",
    value: "结算部门 : {deptName}",
    name: "deptName",
    defaultValue: '结算部门'
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "本月销售",
    value: "结算日期 : {salesAmount}",
    name: "salesAmount",
    defaultValue: '"本月销售"'
  },
  // statementPrintDetail.trader     : trader_
  {
    type: "braid-txt",
    isEdit: true,
    title: "公司名称",
    value: "公司名称：{trader_traderName}",
    name: "trader_traderName",
    defaultValue: '公司名称'
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "电话",
    value: "电话：{trader_phone}",
    name: "trader_phone",
    defaultValue: '电话'
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "公司地址",
    value: "公司地址：{trader_address}",
    name: "trader_address",
    defaultValue: '公司地址'
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "税号",
    value: "税号：{trader_creditCode}",
    name: "trader_creditCode",
    defaultValue: '税号'
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "开户行",
    value: "开户行：{trader_bankName}",
    name: "trader_bankName",
    defaultValue: '开户行'
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "账号",
    value: "账号：{trader_bankAccount}",
    name: "trader_bankAccount",
    defaultValue: '账号'
  },
  // statementPrintDetail.sell     : sell_
  {
    type: "braid-txt",
    isEdit: true,
    title: "本月销售净额",
    value: "本月销售净额：{sell_sellTrueAmount}",
    name: "sell_sellTrueAmount",
    defaultValue: '本月销售净额'
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "本月保底额",
    value: "本月保底额：{sell_guaranteeAmount}",
    name: "sell_guaranteeAmount",
    defaultValue: ' 本月保底额'
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "成本额",
    value: "成本额：{sell_costAmount}",
    name: "sell_costAmount",
    defaultValue: '成本额'
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "超保底返款额",
    value: "超保底返款额：{sell_outGuaranteeAmount}",
    name: "sell_outGuaranteeAmount",
    defaultValue: '超保底返款额'
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "不足保底扣款",
    value: "不足保底扣款：{sell_inGuaranteeAmount}",
    name: "sell_inGuaranteeAmount",
    defaultValue: '不足保底扣款'
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "成本扣款",
    value: "成本扣款：{sell_guaranteeCompensateAmount}",
    name: "sell_guaranteeCompensateAmount",
    defaultValue: '成本扣款'
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "成本总额",
    value: "成本总额：{sell_totalCostAmount}",
    name: "sell_totalCostAmount",
    defaultValue: '成本总额'
  },

  // statementPrintDetail.rate     : rate_
  {
    type: "braid-table", title: "扣款名称", name: "rate_table", value: "{rate_table}", columnsAttr: [
      {title: "扣款名称", value: "{扣款合计}", name: "rate_text_all"},
      {title: "费用合计", value: "{费用合计}", name: "rate_feeGoodsAmount"},
    ]
  },
  // statementPrintDetail.rate     : rate_
  {
    type: "braid-txt",
    isEdit: true,
    title: "13%税率价款",
    value: "13%税率价款：{rate_priceAmount}",
    name: "rate_priceAmount",
    defaultValue: '13%税率价款'
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "税金",
    value: "税金：{rate_taxesAmount}",
    name: "rate_taxesAmount",
    defaultValue: '税金'
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "价税合计",
    value: "价税合计：{rate_priceAndTaxesAmount}",
    name: "rate_priceAndTaxesAmount",
    defaultValue: '价税合计'
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "税率价款",
    value: "税率价款：{rate_otherPriceAmount}",
    name: "rate_otherPriceAmount",
    defaultValue: '税率价款'
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "税金",
    value: "税金：{rate_otherTaxesAmount}",
    name: "rate_otherTaxesAmount",
    defaultValue: '税金'
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "价税合计",
    value: "价税合计：{rate_otherPriceAndTaxesAmount}",
    name: "rate_otherPriceAndTaxesAmount",
    defaultValue: '价税合计'
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "价款",
    value: "价款：{rate_totalPriceAmount}",
    name: "rate_totalPriceAmount",
    defaultValue: '价款'
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "税金",
    value: "税金：{rate_totalTaxesAmount}",
    name: "rate_totalTaxesAmount",
    defaultValue: '税金'
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "价税合计",
    value: "价税合计：{rate_totalPriceAndTaxesAmount}",
    name: "rate_totalPriceAndTaxesAmount",
    defaultValue: '价税合计'
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "应付金额",
    value: "应付金额：{rate_payAble}",
    name: "rate_payAble",
    defaultValue: '应付金额'
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "已结金额",
    value: "已结金额：{rate_amountSettled}",
    name: "rate_amountSettled",
    defaultValue: '已结金额'
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "实付金额",
    value: "实付金额：{rate_payment}",
    name: "rate_payment",
    defaultValue: '实付金额'
  },

  //  statementPrintDetail.owner     : owner_
  {
    type: "braid-txt",
    isEdit: true,
    title: "公司名称",
    value: "公司名称：{owner_name}",
    name: "owner_name",
    defaultValue: '公司名称'
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "开户行",
    value: "开户行：{owner_bankName}",
    name: "owner_bankName",
    defaultValue: '开户行'
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "税号",
    value: "税号：{owner_creditCode}",
    name: "owner_creditCode",
    defaultValue: '税号'
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "公司地点",
    value: "公司地点：{owner_address}",
    name: "owner_address",
    defaultValue: '公司地点'
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "账号",
    value: "账号：{owner_bankAccount}",
    name: "owner_bankAccount",
    defaultValue: '账号'
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "电话",
    value: "电话：{owner_phone}",
    name: "owner_phone",
    defaultValue: '电话'
  },


  {type: "braid-txt", isEdit: true, title: "预算", value: "预算：", name: "", defaultValue: '预算'},
  {type: "braid-txt", isEdit: true, title: "一级", value: "一级：", name: "", defaultValue: '一级'},
  {type: "braid-txt", isEdit: true, title: "二级", value: "二级：", name: "", defaultValue: '二级'},
  {type: "braid-txt", isEdit: true, title: "三级", value: "三级：", name: "", defaultValue: '三级'},

  {type: "braid-txt", isEdit: true, title: "总经理", value: "总经理：", name: "", defaultValue: '总经理'},
  {type: "braid-txt", isEdit: true, title: "财务经理", value: "财务经理：", name: "", defaultValue: '财务经理'},
  {type: "braid-txt", isEdit: true, title: "结算主管", value: "结算主管：", name: "", defaultValue: '结算主管'},
  {type: "braid-txt", isEdit: true, title: "结算会计", value: "结算会计：", name: "", defaultValue: '结算会计'},

  // 第二页
  {
    type: "braid-html",
    title: "分页2",
    isEdit: true,
    value: "{第2页/共3页}",
    defaultValue: "<font ><span tdata='pageNO'>第2页</span>/<span tdata='pageCount'>共3页</span></font>",
    style: {ItemType: 2, BottomMargin: 8,}
  },
  {type: "braid-txt", isEdit: true, title: "自定义文本", value: "", defaultValue: "自定义文本"},
  {type: "braid-txt", isEdit: true, title: "标题", value: "{goodsTitle}", name: "goodsTitle",},
  {type: "braid-txt", isEdit: true, title: "结算单号", value: "结算单号:{id}", name: "id", defaultValue: '结算单号'},
  {
    type: "braid-txt",
    isEdit: true,
    title: "合同号",
    value: "合同号 : {contractNo}",
    name: "contractNo",
    defaultValue: '合同号'
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "结算年月",
    value: "结算年月 : {month}",
    name: "month",
    defaultValue: '结算年月'
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "结算部门",
    value: "结算部门 : {deptName}",
    name: "deptName",
    defaultValue: '结算部门'
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "结算日期(开始)",
    value: "结算日期 : {startDate}",
    name: "startDate",
    defaultValue: '结算日期'
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "结算日期(结束)",
    value: "- {endDate}",
    name: "endDate",
    defaultValue: '结算日期'
  },
  {
    type: "braid-table", title: "商品明细", name: "goodsList", value: "{goodsList}", columnsAttr: [
      {title: "商品代码", value: "{商品代码}", name: "goodsCode"},
      {title: "商品名称", value: "{商品名称}", name: "goodsName"},
      {title: "扣点", value: "{扣点}", name: "settlementRate"},
      {title: "开始日期", value: "{开始日期}", name: "startDate"},
      {title: "结束日期", value: "{结束日期}", name: "endDate"},
      {title: "销售金额", value: "{销售金额}", name: "salesAmount"},
      {title: "销售净额", value: "{销售净额}", name: "sellTrueAmount"},
      {title: "销售成本", value: "{销售成本}", name: "sellCostAmount"},
      {title: "折扣分摊", value: "{折扣分摊}", name: "discountAmount"}
    ]
  },


  // 第三页
  {
    type: "braid-html",
    title: "分页3",
    isEdit: true,
    value: "{第3页/共3页}",
    defaultValue: "<font ><span tdata='pageNO'>第3页</span>/<span tdata='pageCount'>共3页</span></font>",
    style: {ItemType: 2, BottomMargin: 8,}
  },
  {type: "braid-txt", isEdit: true, title: "自定义文本", value: "", defaultValue: "自定义文本"},
  {type: "braid-txt", isEdit: true, title: "标题", value: "{feeTitle}", name: "feeTitle",},
  {type: "braid-txt", isEdit: true, title: "结算单号", value: "结算单号:{id}", name: "id", defaultValue: '结算单号'},
  {
    type: "braid-txt",
    isEdit: true,
    title: "合同号",
    value: "合同号 : {contractNo}",
    name: "contractNo",
    defaultValue: '合同号'
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "供货商名称",
    value: "供货商名称 : {trader_traderName}",
    name: "trader_traderName",
    defaultValue: '供货商名称'
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "结算年月",
    value: "结算年月 : {month}",
    name: "month",
    defaultValue: '结算年月'
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "公司名称",
    value: "公司名称 : {owner_name}",
    name: "owner_name",
    defaultValue: '公司名称'
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "开户银行",
    value: "开户银行 : {owner_bankName}",
    name: "owner_bankName",
    defaultValue: '开户银行'
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "税号",
    value: "税号 : {owner_creditCode}",
    name: "owner_creditCode",
    defaultValue: '税号'
  },
  {
    type: "braid-txt",
    isEdit: true,
    title: "账号",
    value: "账号 : {owner_bankAccount}",
    name: "owner_bankAccount",
    defaultValue: '账号'
  },
  {
    type: "braid-table", title: "费用项目", name: "feeList", value: "{费用项目}", columnsAttr: [
      {title: "费用项目", value: "{费用项目}", name: "feeName"},
      {title: "金额", value: "{金额}", name: "feeAmount"},
      {title: "扣款属性", value: "{扣款属性}", name: "type"},
      {title: "扣款方式", value: "{扣款方式}", name: "method"},
    ]
  },
  {
    "type": "braid-taskList",
    "title": "审批意见列表",
    "name": "tasksReduce",
    "value": "{审批意见列表}",
    "isEdit": true,
    "size": "small",
    "valueAttr": [
      {
        "name": "集团审核",
        "endTime": null,
        "result": 1,
        "reason": null,
        "assigneeUser": {
           "nickname": "王三明", "deptName": "营运四区"
        }
      },
      {
        "name": "总经理审批",
        "endTime": 1715842199812,
        "result": 2,
        "reason": "同意，但是不完全同意！",
        "assigneeUser": {
          "nickname": "王二明", "deptName": "营运四区"
        }
      },
      {

        "name": "开始 （经营单位）",
        "endTime": 1715842186812,
        "result": 2,
        "reason": "流程第一节点是发起人,系统自动通过",
        "assigneeUser": {
          "nickname": "王大明", "deptName": "营运四区"
        }
      },
    ]
  },
]

