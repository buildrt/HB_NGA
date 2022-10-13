<template>
  <div id="nga_comments_bar">
    <el-tabs>
      <el-tab-pane :label="this.$store.getters.getBuildingValue + '号楼'">
        <n-g-a-comments-item
            :key="index"
            v-for="(item, index) in commentsList"
            :style="index % 2 === 1 ? style1 : style2"
            :item="item">
        </n-g-a-comments-item>
      </el-tab-pane>
    </el-tabs>
    <!-- 分页 -->
    <el-pagination
        layout="prev, next"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange">
    </el-pagination>
    <el-backtop style="z-index: 10" target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
  </div>
</template>

<script>
import NGACommentsItem from "@/components/content/ngaBar/ngaCommentsItem/NGACommentsItem";
import querystring from "querystring";
import axios from "@/network/axios";

export default {
  name: "NGACommentsBar",
  components: {NGACommentsItem},
  data() {
    return {
      commentsList: [

      ],
      building2: [],
      obj: {
        // 当前页
        pageNum: 1,
        // 页容量
        pageSize: 20,
      },
    }
  },
  methods: {
    list(form) {
      axios({
        method:"post",
        url:"/test/comment",
        data:querystring.stringify(form)
      }).then(res=>{
        console.log("res.data:");
        console.log(res.data)
        let data = res.data;
        if (data.length > 0) {
          this.commentsList = res.data;
        }
      })
    },
    handleCurrentChange(val) {
      console.log(val);
      // 将val赋值当前页,页数改变重新请求
      this.obj.pageNum = val;
      let form = this.$store.getters.getFormValue;
      form = Object.assign({}, form, this.obj)
      console.log(form, "form");
      this.list(form);
      document.getElementById("nga_comments_bar").scrollIntoView({
        behavior: "smooth"
      });
    },
    // 页数改变,将val 赋值 给 pagesize
    handleSizeChange(val) {
      // console.log(val);
      this.obj.pageSize = val;
      // this.list(form);
    },
  },
  computed: {
    style1() {
      return {
        backgroundColor: 'rgba(255,255,255,0.3)'
      }
    },
    style2() {
      return {
        backgroundColor: 'rgba(255,255,255,0.6)'
      }
    }
  },
  mounted() {
    console.log("val");
    this.building2 = this.$store.getters.getBuildingValue;
    this.commentsList = this.$store.getters.getCommentsValue;
    console.log(this.building2, "233")
    console.log(this.commentsList, "233")
  },
}
</script>
<style>
.el-pagination .btn-prev {
  position: relative;
  width: 80px;
  height: 50px;
  font-size: 30px;
  margin-right: 20px;
}
.el-pagination .btn-next {
  position: relative;
  width: 80px;
  height: 50px;
  margin-left: 20px;
}
.el-pagination .btn-next .el-icon {
  font-size: 25px;
}
.el-pagination .btn-prev .el-icon {
  font-size: 25px;
}
</style>
<style scoped>
  #nga_comments_bar {
    position: absolute;
    top: 9%;
    left: 1%;
    width: 98%;
    height: auto;
    border-radius: 10px;
    background-color: rgba(255,255,255,0.8);
    /*background-color: #ff5777;*/
    box-shadow: -15px 15px 15px rgba(0, 0, 0, 0.3);
    overflow: hidden;
  }
  .el-tabs {
    position: relative;
    top: 5px;
    width: 98%;
    left: 1%;
    font-size: 16px;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .el-pagination {
    position: relative;
    margin-top: 30px;
    width: 50%;
    height: 100px;
    /*border: 1px solid black;*/
    text-align: center;
    left: 25%;
  }

</style>