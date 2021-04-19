<template>
  <div class="header">
    <div class="logoBox">
      <img :src="logoIcon" class="logo" />
      <div class="logoTitle">
        <p>Icewall</p>
      </div>
    </div>
    <div class="midBox">
      <div class="leftBox">
        <div class="apppli">Application</div>
        <img class="arrow" :src="arrow">
        <div class="root">Dashboard</div>
      </div>
      <div class="rightBox">
        <div class="inputBox">
          <input type="text" placeholder="Search ...">
          <img :src="iconSearch">
        </div>
        <div class="boxBell">
          <img class="bell" :src="bell">
          <span class="dot"></span>
        </div>
        <div class="boxAvatar">
          <img class="avatar" :src="avatar">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import iconSearch from "../assets/img/search.svg";
import arrow from "../assets/img/arrow.svg";
import avatar from "../assets//img/avatar.png";
import bell from "../assets/img/bell.png";
import logoIcon from "../assets/img/logo.svg";

export default {
  data() {
    return {
      iconSearch,
      arrow,
      avatar,
      bell,
      logoIcon,
      drawerStatus: false,
    };
  },
  methods: {
    closeDrawer() {
      this.drawerStatus = !this.drawerStatus;
      this.$emit("closeDrawer", this.drawerStatus);
      if (this.drawerStatus) {
        document.querySelector(".iconLeft").classList.add("upDown");
      } else {
        document.querySelector(".iconLeft").classList.remove("upDown");
      }
    },
  },
};
</script>

<style scoped>
.boxAvatar{
  width: 3%;
  padding: 10px;
}
.avatar{
  width: 100%;
}
.bell{
  width:100%;
}
.boxBell{
  width: 2%;
  position: relative;
  margin: 10px;
}
.rightBox{
  display: flex;
  align-items: center;
  margin-right: 3%;
  justify-content: flex-end;
}
.inputBox{
  background-color: #7f8fa6;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content:space-between;
  width: 220px;
  height: 35px;
  margin: 10px;
  
}
.inputBox input{
  border: none;
  outline: none;
  width: 80%;
  margin-left:5px ;
  background-color: inherit;
}
.inputBox img{
  padding:7px ;
}
.dot{
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  top: 0;
  right: 0;
}
.apppli{
  font-size: 13px;
  color: #7f8fa6;
  font-weight: 500;
}
.root{
  font-size: 13px;
  color: #dcdde1;
  font-weight: 500;
}
.header {
  height: 70px;
  width: 100%;
  /* background-color: #1e3799; */
  /* position: fixed; */
  top: 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(150,150,187,0.2);
}
.arrow{
  transform: rotate(270deg);
  width: 11%;
}
.logoBox {
  height: 100%;
  width: 10.5%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid rgba(150,150,187,0.2);
}
.logo {
  height: 35%;
  cursor: pointer;
  padding: 0 9px;
}
.logoTitle p {
  margin: 0;
  color: white;
  font-size: 17px;
}
.midBox {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 89.5%;
}
.leftBox{
  display: flex;
  align-items: center;
  margin-left: 3%;
}



</style>
