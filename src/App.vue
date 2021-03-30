<template>
  <div>
    <Header />
    <Drawer />
    <router-view class="main" />
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Drawer from "./components/Drawer.vue";
export default {
  data() {
    return {
      
    };
  },
  components:{
    Header,Drawer
  }
};
</script>
<style>
body {
  margin: 0;
  box-sizing: border-box;
  padding: 0;
  background-color: #f1f3f8;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.main {
  width: 82vw;
  height: 82vh;
  /* position: fixed; */
  top: 15vh;
  left: 18vw;
}
</style>
