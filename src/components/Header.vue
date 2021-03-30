<template>
  <div class="header">
    <div class="logoBox">
      <img
        :src="logoIcon"
        class="logo"
      />
      <div class="logoTitle">
        <h3>Elementor</h3>
        <p>qa@elementor.io</p>
      </div>
      <img class="iconLeft" :src="arrow">
    </div>
    <div class="searchBox">
      <img :src="iconSearch" class="searchIcon">
      <input type="text" placeholder="Search for people , document,...">
    </div>
    <div class="iconBox">
      <div class="icon bellBox"><img class="icon" :src="bell"><span></span></div>
      <div class="avatar avatarBox"><img class="avatar" :src="avatar"><span>+</span></div>
      <img class="icon" :src="arrow">
    </div>
  </div>
</template>

<script>
import iconSearch from '../assets/img/search.svg';
import arrow from '../assets/img/arrow.svg';
import avatar from '../assets//img/avatar.png';
import bell from '../assets/img/bell.png';
import logoIcon from '../assets/logo.png'

export default{
  data(){
    return{
      iconSearch,arrow,avatar,bell,logoIcon
    }
  }
};
</script>

<style scoped>
.header {
  height: 12vh;
  width: 100vw;
  background-color: #ffffff;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
}
.logoBox {
  height: 100%;
  width: 18%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.iconLeft{
  height: 22%;
  width: 6%;
  cursor: pointer;
}
.bellBox img{
  width: 100%;
  height: 100%;
}
.bellBox{
  position: relative;
}
.searchIcon{
  height: 35%;
  cursor: pointer;
}
.bellBox span{
 position: absolute;
 height: 5px;
 width: 5px;
 background-color: red;
 border-radius: 50%;
}
.logo{
  height: 65%;
  cursor: pointer;
}
.logoTitle h3{
  margin: 5px 0;
}
.logoTitle p {
  margin: 0;
  color: gray;
}
.searchBox{
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  width: 60%;
}
.searchBox input{
  border: none;
  outline: none;
  height: 80%;
  width: 90%;
  padding: 0 20px;
}
.iconBox{
  height: 100%;
  width: 22%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
}
.icon{
  width: 6%;
  height: 22%;
  cursor: pointer;
}
.avatar{
  width: 15%;
  height: 50%;
  position: relative;
  cursor: pointer;
}
.avatarBox img{
  width: 100%;
  height: 100%;
}
.avatarBox span{
  width: 15px;
  height: 15px;
  background-color: palevioletred;
  font-size: 17px;
  font-weight: bold;
  border-radius: 50%;
  border: 2px solid white;
  position: absolute;
  right: -3px;
  bottom: -3px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>