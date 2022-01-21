<template>
  <div id="ngaSearchBar">
    <el-form ref="ngaSearchForm" :model="ngaSearchForm">
      <el-descriptions class="margin-top" :column="6" border>
        <el-descriptions-item>
          <template slot="label">
           楼号
          </template>
          <el-select v-model="ngaSearchForm.buildingNumber" placeholder="选择楼号">
            <el-option label="一号楼" value="1"></el-option>
            <el-option label="二号楼" value="2"></el-option>
          </el-select>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            uid
          </template>
          <el-input v-model="ngaSearchForm.uid"></el-input>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            用户名
          </template>
          <el-input v-model="ngaSearchForm.username"></el-input>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            楼层
          </template>
          <el-input v-model="ngaSearchForm.floor"></el-input>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            评论类型
          </template>
          <el-select v-model="ngaSearchForm.type" placeholder="选择类型">
            <el-option label="一号楼" value="1"></el-option>
            <el-option label="二号楼" value="2"></el-option>
          </el-select>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            排序标准
          </template>
          <el-select v-model="ngaSearchForm.startTime" placeholder="选择标准">
            <el-option label="一号楼" value="1"></el-option>
            <el-option label="二号楼" value="2"></el-option>
          </el-select>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            开始日期
          </template>
          <el-form-item>
            <el-col :span="11">
              <el-date-picker type="date" placeholder="开始日期" style="width: 1rem;" v-model="ngaSearchForm.startTime"></el-date-picker>
            </el-col>
          </el-form-item>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            结束日期
          </template>
          <el-form-item>
            <el-col :span="11">
              <el-date-picker type="date" placeholder="结束日期" style="width: 1rem;" v-model="ngaSearchForm.endTime"></el-date-picker>
            </el-col>
          </el-form-item>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            排序
          </template>
          <el-select v-model="ngaSearchForm.sort" placeholder="排序方式">
            <el-option label="一号楼" value="1"></el-option>
            <el-option label="二号楼" value="2"></el-option>
          </el-select>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            显示数量
          </template>
          <el-input v-model="ngaSearchForm.quantity"></el-input>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            显示方式
          </template>
          <el-select v-model="ngaSearchForm.mode" placeholder="显示方式">
            <el-option label="一号楼" value="1"></el-option>
            <el-option label="二号楼" value="2"></el-option>
          </el-select>
        </el-descriptions-item>
        <el-descriptions-item>
          <el-button icon="el-icon-search" type="primary">查询</el-button>
        </el-descriptions-item>
      </el-descriptions>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "NGASearchBar",
    data () {
      return {
        size: '',
        ngaSearchForm: {
          buildingNumber: '',
          uid: '',
          username: '',
          floor: '',
          type: '',
          sortStandard: '',
          startTime:'',
          endTime: '',
          sort: '',
          quantity: '',
          mode: '',
        }
      };
    }
  }
</script>

<style>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .el-descriptions__body {
    color: #606266;
    background-color: rgba(0,0,0,0);
  }
  .el-input {
    width: 0.8rem;
  }
  .el-select {
    width: 0.8rem;
  }
  .el-col {
    width: 1rem;
  }
</style>

<style scoped>
  #ngaSearchBar {
    position: relative;
    top: 0.4rem;
    left: 10%;
    width: 8rem;
    height: auto;
    border-radius: 15px;
    background-color: rgba(255,255,255,0.8);
    /*background-color: #ff5777;*/
    box-shadow: -15px 15px 15px rgba(0, 0, 0, 0.3);
  }
  el-descriptions {
    position: relative;
    width: 8rem;
    height: 0.8rem;
  }
</style>