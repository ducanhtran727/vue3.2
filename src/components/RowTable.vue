<template>
  <div class="row">
    <div class="col-1">{{ itemContent.name }}</div>

    <div class="col-3">{{ itemContent.email }}</div>
    <div class="col-2">{{ itemContent.id }}</div>
  </div>
</template>

<script>
export default {
  props: ["itemContent"],
};
</script>

<style scoped>
.row {
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
  height: 40px;
  border-bottom: 1px solid gray;
  width: 100%;
}
.col-1 {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 2%;
  font-size: 12px;
}
.col-2 {
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 2%;
  font-size: 14px;
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
