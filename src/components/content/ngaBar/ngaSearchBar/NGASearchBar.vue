<template>
  <div id="ngaSearchBar">
    <el-form :inline="true" :label-position="left" label-width="100px" :rules="rules" ref="ngaSearchForm" :model="ngaSearchForm">
      <el-form-item label="楼号" prop="no">
        <el-radio
            v-model="ngaSearchForm.no"
            id="floor_radio"
            :label="item.no"
            v-for="(item, index) in actionsMap.no"
            :key="index"
        >{{item.label}}</el-radio>
      </el-form-item>
      <br>
      <el-form-item label="关键词">
        <el-input v-model="ngaSearchForm.fuzzyKey" placeholder="请输入关键词"></el-input>
      </el-form-item>
      <el-form-item label="用户uid">
        <el-input v-model="ngaSearchForm.uid" placeholder="请输入用户uid"></el-input>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input v-model="ngaSearchForm.name" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="楼层" prop="floor">
        <el-input v-model.number="ngaSearchForm.floor" placeholder="请输入楼层"></el-input>
      </el-form-item>
      <el-form-item label="评论类型">
        <el-select v-model="ngaSearchForm.tag" placeholder="选择类型">
          <el-option
              v-for="(item, index) in actionsMap.tag"
              :key = "index"
              :label = "item.name"
              :value = "item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="开始日期">
        <el-date-picker
            v-model="ngaSearchForm.startDate"
            append-to-body="false"
            clearable="true"
            popper-class="popperClass"
            type="datetime"
            style="width: 200px"
            format="yyyy-MM-dd HH:mm:ss"
            value-format="yyyy-MM-dd HH:mm:ss"
            placeholder="选择日期时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="结束日期">
        <el-date-picker
            v-model="ngaSearchForm.endDate"
            append-to-body="false"
            popper-class="popperClass"
            type="datetime"
            style="width: 200px"
            format="yyyy-MM-dd HH:mm:ss"
            value-format="yyyy-MM-dd HH:mm:ss"
            placeholder="选择日期时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="排序标准">
        <el-select v-model="ngaSearchForm.orderBy" placeholder="选择标准">
          <el-option
              v-for="item in actionsMap.orderBy"
              :key = "item.value"
              :label = "item.name"
              :value = "item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="排序">
        <el-select v-model="ngaSearchForm.order" placeholder="排序方式">
          <el-option
              v-for="item in actionsMap.order"
              :key = "item.value"
              :label = "item.name"
              :value = "item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="操作">
        <el-button type="danger" @click="handleClose">关闭</el-button>
        <el-button type="primary" @click="load">搜索</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import axios from "@/network/axios";
import * as querystring from "querystring";
import axios from "@/network/axios";


export default {
  name: "NGASearchBar",
  data () {
    var checkNo = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('楼号不能为空'));
      } else {
        if (this.ngaSearchForm.no !== '') {
          this.$refs.ngaSearchForm.validateField('no');
        }
        callback();
      }
    }
    return {
      // 表单
      ngaSearchForm: {
        // 楼号
        no: 13,
        // 用户uid
        uid: '',
        // 用户名
        name: '',
        // 楼层
        floor: '',
        // 评论类型
        tag: '',
        // 开始日期
        startDate: '',
        // 结束日期
        endDate: '',
        // 排序标准
        orderBy: "floor",
        // 排序
        order: 2,
        // 仅获取json类型
        type: 2,
        fuzzyKey: ''
      },
      // 校验规则
      rules: {
        no: [
          {validator: checkNo, trigger: 'blur'},
        ],
        floor: [
          {type: 'number', message: '楼层只能输入数字', trigger: 'blur'},
        ],
      },
      actionsMap: {
        // 楼号集合
        no: [],
        // 评论类型集合
        tag: [{
          name: '所有',
          value: ''
        }, {
          name: '同传',
          value: 3
        },
          {
            name: '回复',
            value: 2
          },
          {
            name: '普通评论',
            value: 1
          },

        ],
        // 排序类型集合
        orderBy: [
          {
            name: '用户uid',
            value: "uid"
          },
          {
            name: '用户名',
            value: "name"
          },
          {
            name: '楼层',
            value: "floor"
          },
        ],
        // 排序方式集合
        order: [
          {
            name: '升序',
            value: 1
          },
          {
            name: '降序',
            value: 2
          },
        ],
      },
      page: {
        pageNum: 1,
        pageSize: 20,
        hasMore: true
      },
      searchComments: [],
      building: [],
    };
  },
  methods: {
    handleClose() {
      this.$emit('close')
    },
    handleOpenSheet(key) {
      this.actionsKey = key;
      this.$nextTick(() => {
        this.showSheet = true
      })
    },
    load() {
      // this.$router.push('nga_comments');
      console.log("no:")
      console.log(this.ngaSearchForm.no);
      let form = JSON.parse(JSON.stringify(this.ngaSearchForm))
      this.$store.commit('setFormValue', form);
      form = Object.assign({}, form, this.page)
      this.building = this.ngaSearchForm.no;
      this.$store.commit('setBuildingValue', this.building)
      console.log(form);
      axios({
        method:"post",
        url:"/test/comment",
        data:querystring.stringify(form)
      }).then(res=>{
        console.log("res.data1:")
        console.log(res.data)
        this.searchComments = res.data;
        this.$store.commit('setCommentsValue', this.searchComments)
        setTimeout(() => {
          this.$router.replace('/nga_comments');
        },1000);
      })
    },
    sheetSelect(e) {
      this.ngaSearchForm[this.actionsKey] = e.value
    },
    buildingList() {
      axios({
        method: 'get',
        url: '/test/list'
      }).then(res => {
        console.log(res);
        let list = [];
        let resData = res.data
        console.log("resData", resData);
        for(let i = resData.length - 1; i >= 0; i--){
          let item = resData[i]
          list.push(item)
        }
        console.log("list", list);
        this.actionsMap.no = list
      })
    }
  },
  mounted() {
    this.buildingList();
  },
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
  width: 200px;
}
.el-select {
  width: 200px;
}
.el-col {
  width: 200px;
}
.el-picker-panel {
  border-radius: 4px;
  /*border: 1px solid #93bee7 !important;*/
}
.el-popper[x-placement^=bottom] {
  background-color: white;
}
.el-picker-panel__body-wrapper {
  position: absolute;
  width: 92%;
  right: 2%;
  text-align: center;
}
.el-picker-panel__body-wrapper .el-input {
  position: relative;
  width: 90%;
}
</style>

<style scoped>
#ngaSearchBar {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  height: auto;
  border-radius: 10px;
  background-color: rgba(255,255,255,0.9);
  /*background-color: #ff5777;*/
  box-shadow: -15px 15px 15px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

.el-form {
  position: relative;
  /*border: 1px solid black;*/
  width: 95%;
  left: 2.5%;
  padding-top: 15px;
  font-weight: bold;
}
#floor_radio {
  position: relative;
  left: 30px;
}
</style>