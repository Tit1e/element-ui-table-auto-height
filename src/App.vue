<template>
  <div id="app">
    <div class="left-content">
      左侧内容
    </div>
    <form-page ref="formPage">
      <el-form slot="top" ref="form" label-width="80px" inline label-suffix="：">
        <el-form-item label="条件1">
          <el-input v-model="form.name" placeholder="条件1" />
        </el-form-item>
        <el-form-item label="条件2">
          <el-input v-model="form.name" placeholder="条件2" />
        </el-form-item>
        <el-form-item label="条件3">
          <el-input v-model="form.media_name" placeholder="条件3" clearable />
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查 询</el-button>
        </el-form-item>
      </el-form>
      <div slot="content">
        <el-table :data="tableData" :height="tableHeight" border stripe>
          <el-table-column
            type="index">
          </el-table-column>
          <el-table-column
            prop="id"
            label="ID">
          </el-table-column>
        </el-table>
      </div>
    </form-page>
  </div>
</template>

<script>
import formPage from '@/components/FormPage'
import autoHeight from '@/mixins/autoHeight.js'
export default {
  name: 'app',
  mixins: [autoHeight],
  components: {
    formPage
  },
  data() {
    return {
      form: {},
      tableData: []
    }
  },
  created(){
    for(let i = 0; i < 30; i++){
      this.tableData.push({id: i})
    }
  }
}
</script>
<style>
body{
  margin: 0;
}
</style>
<style lang="scss" scoped>

#app {
  padding: 20px;
  box-sizing: border-box;
  height: 100vh;
  color: #2c3e50;
  display: flex;
  .left-content{
    width: 200px;
    resize: horizontal;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    overflow-y: scroll;
    margin-right: 10px;
  }
}
</style>
