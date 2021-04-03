<template>
  <div>
    <Header @closeDrawer="drawerStatus = $event" />
    <div class="box-main">
      <Drawer :drawerStatus="drawerStatus" :params="params" />
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
      params:this.$route.name
    };
  },
  components: {
    Header,
    Drawer,
  },
  watch: {
    drawerStatus: function() {
      console.log(this.drawerStatus);
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
  background-color: #f1f3f8;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.main {
  width: 81vw;
  height: 82vh;
  position: relative;
  top: 15vh;
  left: 18vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box-main{
  display: flex;
}
</style>
