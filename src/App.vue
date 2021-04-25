<template>
  <div>
    <Header @closeDrawer="drawerStatus = $event" />
    <div class="box-main">
      <Drawer :drawerStatus="drawerStatus" :paramsRouter="paramsRouter" />
      <router-view class="main" />
    </div>
    
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Drawer from "./components/Drawer.vue";
export default {
  data() {
    return {
      drawerStatus: false,
      paramsRouter:this.$route.name
    };
  },
  components: {
    Header,
    Drawer,
  },
  watch: {
    drawerStatus: function() {
   
    },
    $route(to) {
      this.params = to.name;
    },
  },
};
</script>
<style>
body {
  margin: 0;
  box-sizing: border-box;
  padding: 0;
  background-color: #273c75;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.main {
  width: 80vw;
  height: 82vh;
  position: relative;
  top: 3vh;
  left: 1vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f5f6fa;
  border-radius: 5px;
}
.box-main{
  display: flex;
}
</style>
