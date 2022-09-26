<template>
  <div id="nga_comments_bar">
    <el-tabs>
      <el-tab-pane :label="build + '号楼'" v-for="build in buildingList" :key="build">
        <n-g-a-comments-item
            :key="index"
            v-for="(item, index) in commentsList"
            :style="index % 2 === 1 ? style1 : style2"
            :item="item">
        </n-g-a-comments-item>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import NGACommentsItem from "@/components/content/ngaBar/ngaCommentsItem/NGACommentsItem";
export default {
  name: "NGACommentsBar",
  components: {NGACommentsItem},
  data() {
    return {
      buildingList: [
        11,
        12,
      ],
      commentsList: [
        {
          name: '輪廻転生RT',
          uid: '2456789',
          tag: 2,
          floor: 67899,
          like: 20,
          date: '2022-09-25 11:20:00',
          comments: "那两张我也有来着goodjob\n" +
              "压力嘛，大家都是同好，偶尔跑出来的野怪也是没有合理逻辑无法动摇我的看法，压力槽不满很正常啦\n" +
              "我使用辩论思维目标我\n" +
              "野怪使用胡言乱语目标我受到反击(辩论思维) 野怪卒\n" +
              "正主 使用 发糖 目标 全体\n" +
              "我 压力-100\n" +
              "差不多这么个流程嘲笑1\n" +
              "\n" +
              "https://nga.178.com/read.php?&tid=33284282&pid=641925100&to=1",
        },
        {
          name: 'BuildRT',
          uid: '12345678',
          tag: 1,
          floor: 4528,
          like: 15,
          date: '2022-09-15 12:20:00',
          comments: "野怪使用胡言乱语目标我受到反击(辩论思维) 野怪卒\n" +
              "高中那会儿是狂热五迷，最喜欢《仓颉》，然后还有《自传》和《后青春的诗》整张专辑，还有《星空》",
        },
        {
          name: '己亥23333',
          uid: '12345678',
          tag: 1,
          floor: 4528,
          like: 15,
          date: '2022-09-15 12:20:00',
          comments: "野怪使用胡言乱语目标我受到反击(辩论思维) 野怪卒\n" +
              "高中那会儿是狂热五迷，最喜欢《仓颉》，然后还有《自传》和《后青春的诗》整张专辑，还有《星空》",
        },
        {
          name: '己亥23333',
          uid: '12345678',
          tag: 1,
          floor: 4528,
          like: 15,
          date: '2022-09-15 12:20:00',
          comments: "野怪使用胡言乱语目标我受到反击(辩论思维) 野怪卒\n" +
              "高中那会儿是狂热五迷，最喜欢《仓颉》，然后还有《自传》和《后青春的诗》整张专辑，还有《星空》",
        },
        {
          name: '己亥23333',
          uid: '12345678',
          tag: 1,
          floor: 4528,
          like: 15,
          date: '2022-09-15 12:20:00',
          comments: "野怪使用胡言乱语目标我受到反击(辩论思维) 野怪卒\n" +
              "高中那会儿是狂热五迷，最喜欢《仓颉》，然后还有《自传》和《后青春的诗》整张专辑，还有《星空》",
        }
      ],

    }
  },
  methods: {

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
  }
}
</script>

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
</style>