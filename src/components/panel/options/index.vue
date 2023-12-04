<template>
  <div class="options-box">
    <template v-for="(item,index) in optionItems">
      <el-button v-if="item.type == 'braid-table'" size="mini" @click="(e)=>{addTable(e,item,index)}">{{item.title }}</el-button>
      <el-button
        v-else
        size="mini"
        :key="index"
        @click="(e) => {addTempItem(e,item)}"
      >{{ item.title }}
      </el-button>
    </template>
    <el-dialog title="选择列表项" :visible.sync="visible">
      <el-checkbox-group v-model="editItem.selectCol">
        <el-row>
          <el-col v-for="col in editItem.columnsAttr" :key="col.name" :span="12">
            <el-checkbox :label="col.name">{{ col.title }}</el-checkbox>
          </el-col>
        </el-row>
      </el-checkbox-group>

      <div slot="footer" class="dialog-footer">
        <el-button @click="reset">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tablePopover: false,
      visible: false,
      editItem: {}
    }
  },
  computed: {
    optionItems() {
      return this.$vptd.state.optionItems
    },
  },
  methods: {
    // 添加组件
    addTempItem(e, item) {
      console.log("item", item)
      switch (item.type) {
        case 'braid-table': {
          let selectCol = []
          console.log(item.selectCol)
          item.selectCol.forEach((itemName) => {
            let colInfo = item.columnsAttr.find((col) => col.name === itemName)
            if (colInfo) {
              selectCol.push(colInfo)
            }
          })

          item.columns = selectCol //表格显示的字段
          this.$vptd.dispatch('addTempItem', item)
          this.tablePopover = false
          break
        }
        default:
          this.$vptd.dispatch('addTempItem', item)
      }
    },

    addTable(e, item, index) {
      this.visible = true
      this.editItem = JSON.parse(JSON.stringify(item));

    },
    reset() {
      this.visible = false
      this.editItem = {}
    },
    submit() {
      let selectCol = []
      this.editItem.selectCol.forEach((itemName) => {
        let colInfo = this.editItem.columnsAttr.find((col) => col.name === itemName)
        if (colInfo) {
          selectCol.push(colInfo)
        }
      })

      this.editItem.columns = selectCol //表格显示的字段
      this.$vptd.dispatch('addTempItem', this.editItem)
      this.$nextTick(() => {
        this.visible = false
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.options-box {
  .el-button {
    margin-bottom: 10px;
    margin-right: 10px;
    margin-left: 0;
  }
}
</style>
