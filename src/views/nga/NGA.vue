<template>
  <div id="nga">
    <div id="nga_bg">
    </div>
    <div id="nga_page">
      <n-g-a-title-bar></n-g-a-title-bar>
      <n-g-a-search-bar></n-g-a-search-bar>
    </div>
  </div>
</template>

<script>
import NGATitleBar from "@/components/content/ngaBar/ngaTitleBar/NGATitleBar";
import NGASearchBar from "@/components/content/ngaBar/ngaSearchBar/NGASearchBar";
export default {
  name: "NGA",
  components: {NGASearchBar, NGATitleBar}
}
</script>

<style scoped>
  #nga {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
  }
  #nga_bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("../../assets/img/nga/hb1.jpg");
    /*background-repeat:no-repeat;*/
    background-size: 100%;
    background-position: top center;
    -webkit-filter:blur(3px);
    -moz-filter:blur(3px);
    -o-filter:blur(3px);
    -ms-filter:blur(3px);
    filter: blur(3px);
    z-index: -1;
  }
  #nga_page {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
</style>