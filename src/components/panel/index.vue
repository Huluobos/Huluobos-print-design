<template>
  <div class="kr-collapse">
    <el-collapse v-model="activeNames">
      <el-collapse-item title name="1">
        <template slot="title">
          <span>页面参数</span>
        </template>
        <page />
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          <span>样式</span>
        </template>
        <appearance class="pd-l-10" />
      </el-collapse-item>
      <el-collapse-item name="3">
        <template slot="title">
          <div style="display: flex;justify-content: space-between;width: 100%;" >
            <span>组件</span>
            <div style="margin-right: 10px">
<!--              <el-button size="mini" @click.stop="addLabelBtn">新增组件</el-button>-->
            </div>
          </div>
        </template>

        <options @deleteLabel="deleteLabel"/>
      </el-collapse-item>
      <el-collapse-item name="4">
        <template slot="title">
          <span>已加组件</span>
        </template>
        <layers />
      </el-collapse-item>
    </el-collapse>


    <el-dialog title="新增标签" :visible.sync="visible">
      <el-form ref="formData" :model="formData" :rules="rules" label-width="100px" size="small">
        <el-form-item label="标签对象: " prop="code">
          <el-input type="textarea"  :autosize="{ minRows: 5, maxRows: 10}" v-model="formData.code" placeholder="请将标签对象粘贴到此处"></el-input>
        </el-form-item>
      </el-form>


      <div slot="footer" class="dialog-footer">
        <el-button @click="visible=false" size="small">取 消</el-button>
        <el-button type="primary" @click="submit"  size="small">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import page from './page.vue'
import style from './style.vue'
import options from './options/index.vue'
import layers from './layers.vue'

export default {
  components: {
    page,
    appearance: style,
    options,
    layers,
  },

  data() {
    return {
      activeNames: ['1', '2', '3', '4'],
      visible:false,
      formData: {
        code:''
      },
      rules: {
        code: [
          {required: true, message: '请填写', trigger: 'blur'}
        ],
      }
    }
  },
  methods:{
    deleteLabel(each){
      this.$emit("deleteLabel",each)
    },
    addLabelBtn(){
      this.visible = true
    },
    submit(){
      this.$refs["formData"].validate(valid => {
        if (valid) {
          this.$emit('addLabel',this.formData.code)
          setTimeout(()=>{
            this.visible = false
          },500)
        }
      })

    }
  }
}
</script>
