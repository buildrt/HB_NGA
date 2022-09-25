<template>
  <div id="nga_comments_item">
      <div id="profile">
        <table id="profileTable" border="0">
          <tr>
            <td width="16%">
              <el-avatar size="large">{{item.name ? item.name[0] : ''}}</el-avatar>
            </td>
            <td width="50%">
              <span style="color: #f4af60; font-size: 15px; font-weight: bold;">{{item.name}}</span>
              <span style="margin-left: 10px; font-size: 13px;">uid: {{item.uid}}</span>
            </td>
            <td width="15%">
              <el-tag effect="dark" type="success" v-if="item.tag === 2">同传</el-tag>
            </td>
            <td>
              <span style="position:absolute;right: 10px;font-size: 14px;">#{{item.floor}}</span>
            </td>
          </tr>
        </table>
      </div>
    <div id="comments_content">
      <div style="position: relative; top: 0; height: 20px;"></div>
      <span id="contentSpan" v-html="getComments(item.comments)"></span>
      <div style="position: relative; top: 0; height: 20px;"></div>
    </div>
    <div id="comments_foot">
      <table id="comments_foot_table" border="0">
        <tr>
          <td width="10%">
            <span style="position:relative;font-size: 13px;left: 5px;">赞: {{item.like}}</span>
          </td>
          <td></td>
          <td width="60%">
            <span style="font-size: 13px;position: absolute; right: 10px;">{{item.date}}</span>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "NGACommentsItem",
  props: {
    item: {
    }
  },
  data() {
    return {

    }
  },
  methods:{
    getComments(comments) {
      try{
        if (comments) {
          // 替换nga图片域名
          comments = comments.replace(/https:\/\/img4.nga.178.com/g, '/ngaimg4')
          comments = comments.replace(/https:\/\/img.nga.178.com/g, '/ngaimg')
          // 提取超链接
          let regexp = /\[(.*?)]/g;
          let array = comments.matchAll(regexp);
          for(let regexp of array){
            let text = regexp[0];
            if(text.indexOf('此网页不属于本网站，不保证其安全性继续访问取消') !== -1){
              let url = text.substring(text.lastIndexOf('http'), text.length - 1)
              comments = comments.replace(text, `<a href="${url}" >${url}</a>`)
            }
          }
          // 替换换行符
          comments = comments.replace(/[\n|\r]/g, '</br>')
        }

        return comments;
      }catch(e){
        //TODO handle the exception
        return comments;
      }
    }
  }
}
</script>

<style scoped>
  #nga_comments_item {
    position: relative;
    top: 0;
    /*border: 1px solid black;*/
    width: 100%;
    height: 30%;
    /*background-color: #409EFF;*/
  }
  #profile {
    position: relative;
    top: 0;
    left: 0.5%;
    width: 99%;
    height: 55px;
    /*background-color: #F1F3F6;*/
    border-bottom: 1px solid #F0DCBB;
    border-top: 1px solid #F0DCBB;
  }
  #profileTable {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  #comments_content {
    position: relative;
    top: 0;
    bottom: 10px;
    width: 98%;
    left: 1%;
    height: auto;
  }
  #contentSpan {
    position: relative;
    width: 100%;
    font-size: 16px;
    color: black;
    line-height: 26px;
  }
  #comments_foot {
    position: relative;
    top: 0;
    width: 100%;
    height: 45px;
    border-top: 1px solid #F0DCBB;
  }
  #comments_foot_table {
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>