<template>
  <div>
    <div class="container">
      <div class="tabPage">
        <div
          @click="changePage(item.id)"
          :class="[activePage === item.id ? item.name : '', 'page', item.hover]"
          v-for="item in listTab"
          :key="item.id"
        >
          {{ item.text }}
        </div>
      </div>
      <div class="title">Program Languge</div>    
        <MainDocument v-if="activePage === 1" />
        <MainDocument2 v-if="activePage === 2" />
        <MainDocument3 v-if="activePage === 3" />
    </div>
  </div>
</template>
<script>
import MainDocument from "../components/MainDocument";
import MainDocument2 from "../components/MainDocument2";
import MainDocument3 from "../components/MainDocument3";
export default {
  components: {
    MainDocument,
    MainDocument2,
    MainDocument3,
  },
  data() {
    return {
      activePage: 1,
      listTab: [
        {
          id: 1,
          text: "Skill Set",
          name: "page1",
          hover: "hover1",
        },
        {
          id: 2,
          text: "Over view",
          name: "page2",
          hover: "hover2",
        },
        {
          id: 3,
          text: "Timeline",
          name: "page3",
          hover: "hover3",
        },
      ],
    };
  },
  methods: {
    changePage(id) {
      // this.pageId = id;
      this.activePage = id;
    },
  },
};
</script>

<style scoped>
.bodyPage {
  height: 90%;
  width: 100%;
  margin-top: 30px;
}
.container {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 100%;
  height: 100%;
}
.tabPage {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 20px;
  border-bottom: 1px solid #b2bec3;
  height: 10%;
}
.page {
  /* border: 1px solid black; */
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 95%;
  border-radius: 5px 5px 0 0;
}
.hover1 {
  color: #886701;
  font-size: 16px;
  font-weight: bold;
}
.hover2 {
  color: #cb3837;
  font-size: 16px;
  font-weight: bold;
}
.hover3 {
  color: rgb(160, 44, 156);
  font-size: 16px;
  font-weight: bold;
}
.hover1:hover {
  background-color: rgb(255, 249, 229);
  border-bottom: 2px solid #ffcd3a;
}
.hover2:hover {
  background-color: rgba(203, 56, 55, 0.2);
  border-bottom: 2px solid #cb3837;
}
.hover3:hover {
  background-color: rgba(200, 54, 195, 0.2);
  border-bottom: 2px solid #9b59b6;
}
.title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 20px;
  border-bottom: 1px solid #b2bec3;
  height: 10%;
  font-size: 20px;
  font-weight: 500;
}

.page1 {
  background-color: rgb(255, 249, 229);
  border-bottom: 2px solid #ffcd3a;
}
.page2 {
  background-color: rgba(203, 56, 55, 0.2);
  border-bottom: 2px solid #cb3837;
}
.page3 {
  background-color: rgba(200, 54, 195, 0.2);
  border-bottom: 2px solid #9b59b6;
}
</style>
