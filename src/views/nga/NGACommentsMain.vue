<template>
  <div id="nga_comments_main">
<!--    <div id="nga_comments_bg">-->
<!--    </div>-->
    <div id="nga_comments_page">
      <n-g-a-title-bar></n-g-a-title-bar>
      <n-g-a-comments-bar></n-g-a-comments-bar>
    </div>
  </div>
</template>

<script>
import NGATitleBar from "@/components/content/ngaBar/ngaTitleBar/NGATitleBar";
import NGACommentsBar from "@/components/content/ngaBar/ngaCommentsBar/NGACommentsBar";
export default {
  name: "NGACommentsMain",
  components: {
    NGACommentsBar,
    NGATitleBar
  },
  data() {
    return {

    }
  },
}
</script>

<style scoped>
  #nga_comments_main {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("../../assets/img/nga/hb1.jpg");
    overflow-x: hidden;
    overflow-y: auto;
    background-size: 100%;
    background-position: top center;
    z-index: -5;
  }
  #nga_comments_page {
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

</style>