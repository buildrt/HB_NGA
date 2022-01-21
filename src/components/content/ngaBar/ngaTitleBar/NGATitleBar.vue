<template>
  <div id="ngaTitleBar">
    <img id="ngaTitleImg" src="../../../../assets/img/nga/ngaTitle.png" alt="">
  </div>
</template>

<script>

  export default {
    name: "NGATitleBar",
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  #ngaTitleBar {
    position: relative;
    width: 100%;
    top: 0.2rem;
    height: 0.5rem;
    /*background-color: #ff5777;*/
  }
  #ngaTitleImg {
    position: relative;
    top: 0;
    height: 0.5rem;
    width: 4rem;
  }
</style>