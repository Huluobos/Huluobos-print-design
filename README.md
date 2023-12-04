# Huluobos-print-design

基于 kr-print-designer 可查看 kr-print-designer 文档

---

## 简介

Huluobos-print-design 是 一个基于 Vue、ElementUi、C-Lodop 的打印模板设计器。实现打印模板的设计、预览和打印功能。[示例](https://myliuxia.github.io/demo/kr-print-designer/index.html),
本项目针对 kr-print-designer 进行了升级优化

## 安装

Vue 项目中引用该组件

```
npm install Huluobos-print-design
```

打印功能基于 C-Lodop 打印控件，需前往[下载](http://www.lodop.net/download.html)

## 引入

main.js

```javascript
import Vue from "vue";
import HuluobosPrintDesign from "Huluobos-print-design";
import "Huluobos-print-design/lib/Huluobos-print-design.css";

Vue.use(KrPrintDesigner);
```

demo.vue

```html
<template>
  <div id="app">
    <HuluobosPrintDesign
      :temp-value="value"
      :widget-options="widgets"
      :lodop-license="licenseInfo"
      @save="handleSave"
    />
  </div>
</template>
```

## 优化日志

  > 设计器添加表格时改用弹窗显示选择展示列 (src/components/panel/options/index.vue)

