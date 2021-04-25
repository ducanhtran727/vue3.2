<template>
  <div class="row">
    <div class="col-1" v-for="item in header" :key="item.id" >{{ itemContent[item.value] }}</div>
    <div class="col-5">
      <img @click="toggleAction" :src="menuIcon">
    </div>
    <div class="actionBox" v-if="isActionPage">
        <div @click="deleteItem" class="actionItem">Delete row</div>
        <div @click="editItem" class="actionItem">Edit row</div>
      </div>
  </div>
</template>
<script>
import menuIcon from '../assets/img/menu.png';
import axios from 'axios'
export default {
  props: ["itemContent",'header'],
  data() {
    return {
      menuIcon,
      isActionPage:false
    }
  },
  methods: {
    toggleAction(){
      this.isActionPage = !this.isActionPage
    },
    editItem(){
      this.$store.commit("editItem", this.itemContent);
      this.$router.push("/store");
    },
    async deleteItem(){
     await axios.delete(`https://jsonplaceholder.typicode.com/comments/${this.itemContent.id}`)
    }
  }
};
</script>

<style scoped>
.actionItem{
  border-bottom: 1px solid black;
  margin:5px 0;
  cursor: pointer;
}
.actionBox{
  display: flex;
  width:100px;
  height:60px;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  position: absolute;
  top: 10%;
  left:86%;
  z-index: 99;
  background-color:gray;
  border-radius: 10px;
}
.row {
  position: relative;
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
  height: 40px;
  /* border-bottom: 1px solid gray; */
  width: 100%;
  border-radius: 5px;
  background-color: white ;
  margin: 5px 0;
}
.col-1 {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 2%;
  font-size: 12px;
}
.col-5 {
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 2%;
  font-size: 14px;
  cursor: pointer;
}
.col-5 img{
  width: 50%;
}
.col-3 {
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 2%;
  font-size: 14px;
}
</style>
