<template>
  <div>
    <div class="container">
      <div class="tabPage">
        <div
          @click="changePage(item.id)"
          :class="[activePage === item.id ? ' active' : '', 'page']"
          v-for="item in listTab"
          :key="item.id"
        >
          {{ item.text }}
        </div>
      </div>
      <div class="body-container">
        <div class="title">Tilte Page</div>
        <div class="body">
          <MainDocument v-if="activePage === 1" />
          <MainDocument2 v-if="activePage === 2" />
          <MainDocument3 v-if="activePage === 3" />
        </div>
      </div>
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
          text: "page 1",
        },
        {
          id: 2,
          text: "page 2",
        },
        {
          id: 3,
          text: "page 3",
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
.container {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.tabPage {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 20px;
}
.page {
  border: 1px solid black;
  cursor: pointer;
  border-radius: 3px 3px 0 0;
  padding: 5px;
  margin: 0 2px;
}
.body-container {
  width: 50vw;
  height: 40vh;
  /* background-color: gray; */
  border: 1px solid gray;
  border-radius: 5px;
}
.title {
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
}
.active {
  background-color: lightblue;
}
</style>
