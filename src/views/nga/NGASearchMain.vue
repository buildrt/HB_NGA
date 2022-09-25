<template>
  <div id="nga_search_main">
    <div id="nga_search_bg">
    </div>
    <div id="nga_search_page">
      <n-g-a-title-bar></n-g-a-title-bar>
      <n-g-a-search-bar></n-g-a-search-bar>
    </div>
  </div>
</template>

<script>
import NGATitleBar from "@/components/content/ngaBar/ngaTitleBar/NGATitleBar";
import NGASearchBar from "@/components/content/ngaBar/ngaSearchBar/NGASearchBar";
export default {
  name: "NGASearchMain",
  components: {NGASearchBar, NGATitleBar},
}
</script>

<style>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>

<style scoped>
  #nga_search_main {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow-x: hidden;
    overflow-y: auto;
  }
  #nga_search_main::-webkit-scrollbar {
    display: none;
  }
  #nga_search_bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 120%;
    background-image: url("../../assets/img/nga/hb1.jpg");
    /*background-repeat:no-repeat;*/
    background-size: 100%;
    background-position: top center;
    -webkit-filter:blur(3px);
    -moz-filter:blur(3px);
    -o-filter:blur(3px);
    -ms-filter:blur(3px);
    filter: blur(3px);
    z-index: -5;
  }
  #nga_search_page {
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
</style>