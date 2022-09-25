<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import 'element-ui/lib/theme-chalk/index.css';

  export default {
    name: 'App',
    components: {

    },
    data() {

    },
    created() {

    }
  }
</script>

<style>
  @import "assets/css/base.css";
  #app {
    position: fixed;
    width: 100%;
    height: 100%;
    min-height:100%;
    z-index: -10;
    overflow: hidden;
  }
  #app::-webkit-scrollbar {
    display: none;
  }
</style>
