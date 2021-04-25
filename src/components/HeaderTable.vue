<template>
  <div class="title-table">
    <div class="col-3" v-for="item in title" :key="item.id">{{item.text}}</div> 
  </div>
</template>

<script>
export default {
    props:['title'],
};
</script>

<style scoped>
.title-table {
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
  height: 40px;
  width: 100%;
  border-bottom: 1px solid gray;
}
.col-1 {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 2%;
  font-size: 18px;
  font-weight: 550;
}
.col-2 {
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 2%;
  font-weight: 550;
  font-size: 18px;
}
.col-3 {
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 2%;
  font-weight: 550;
  font-size: 18px;
}
</style>
