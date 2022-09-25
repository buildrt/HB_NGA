<template>
  <div id="ngaTitleBar">
    <p>NGA HB专楼自助查询</p>
    <i class="el-icon-search" @click="returnToSearch"></i>
  </div>
</template>

<script>

  export default {
    name: "NGATitleBar",
    data() {
      return {

      }
    },
    methods: {
      returnToSearch() {
        this.$router.push('/nga_search');
      }
    }
  }
</script>

<style scoped>
  #ngaTitleBar {
    position: fixed;
    width: 100%;
    top: 0;
    height: 8%;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
  }
  p {
    position: absolute;
    left: 30px;
    font-size: 24px;
    top: 20%;
    color: white;
    text-shadow: 5px 5px 5px #000;
  }
  i {
    position: absolute;
    right: 30px;
    font-size: 24px;
    color: white;
    top: 25%;
  }
</style>