<template>
  <div class="containerBox">
    <div class="boxImg">
        <img :src="listSkill.img">
    </div>
    <div class="title">{{listSkill.language}}</div>
    <div class="bodyBox">
      <div class="boxSkill">
        <RowTable :itemContent="listSkill" />
        <RowTable :itemContent="listSkill" />
        <RowTable :itemContent="listSkill" />
      </div>
    </div>
  </div>
</template>
<script>
import RowTable from "./RowTable";
import jsImg from '../assets/img/js.jpg'
export default {
  props: ["listSkill"],
  components: {
    RowTable,
  },
  data() {
    return {
      itemContent: {
        name: "Frame Work",
        email: "Years",
        id: "level",
      },
      jsImg
    };
  },
};
</script>
<style scoped>
.boxImg{
    width: 30%;
    height: 35%;
    position: absolute;
    top:-20%;
    /* border: 1px solid black; */
    border-radius:5px ;
}
.boxImg img{
    width: 100%;
    height: 100%;

}
.title {
  text-align: center;
  position: absolute;
  top: 20%;
  font-size: 20px;
  font-weight: 550;
  color: #f5f6fa;
}
.containerBox {
  width: 15vw;
  height: 26vh;
  display: flex;
  align-items: center;
  /* justify-content: space-evenly; */
  flex-direction: column;
  /* border: 1px solid black; */
  position: relative;
  border-radius: 5px;
  /* background-color: white; */
  margin: 10px 50px 0px 50px;
  background-color: #7f8fa6;
  color: #dcdde1;
}
.boxSkill {
  width: 100%;
  
}
.rowTable {
  display: flex;
}
.bodyBox {
  /* border: 1px solid black; */
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  border-radius: 5px 5px 5px 5px;
}
</style>
