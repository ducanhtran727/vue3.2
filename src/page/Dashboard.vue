<template>
  <div>
    <div v-if="loading">Loading ...</div>
    <div class="table" v-else>
      <div class="title-table">
        <div class="col-1">Name</div>
        
        <div class="col-3">Email</div>
        <div class="col-2">Id</div>
      </div>
      <row-table
        v-for="(item, index) in contentPage"
        :key="index"
        :itemContent="item"
      ></row-table>
      <div class="bot-table">
        <div>Items per Page</div>
        <select v-model="rows">
          <option value=5>5</option>
          <option value=10>10</option>
        </select>
        <button class="prev" @click="prevPage">Prev</button>
        <button class="next" @click="nextPage">Next</button>
        <div>
          Page current : {{ count + 1 }} / {{ dataContent.length / rows }}
        </div>
      </div>
      <!-- <div>{{ dataContent }}</div> -->
    </div>
  </div>
</template>

<script>
import RowTable from "../components/RowTable";
import axios from "axios";
export default {
  components: {
    RowTable,
  },
  data() {
    return {
      dataContent: [],
      count: 0,
      rows: 10,
      loading: true,
    };
  },
  methods: {
    nextPage() {
      this.count++;
      console.log(this.rows);
      console.log(this.count);
    },
    prevPage() {
      this.count--;
      console.log(this.rows);
      console.log(this.count);
    },
  },
  created() {
    const data = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        this.dataContent = res?.data;
        this.loading = false;
        console.log(this.dataContent);
      } catch (err) {
        console.log(err);
      }
    };
    data();
  },
  computed: {
    contentPage() {
      const param1 = this.count * this.rows;
      const param2 = param1 + this.rows;
      console.log(param1);
      console.log(param2);
      return this.dataContent.slice(param1, param2);
    },
  },
};
</script>
<style scoped>
.table {
  width: 90%;
  /* height: 90%; */
  border-radius: 10px;
  background-color: white;
  /* position: relative; */
}
.title-table {
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
  height: 40px;
  width: 100%;
  border-bottom: 1px solid gray;
}
.bot-table {
  display: flex;
  align-items: center;
  height: 60px;
  /* position: absolute; */
  bottom: 0;
  /* background-color: violet; */
  width: 100%;
  border-radius: 0 0 5px 5px;
  justify-content: center;
}
.bot-table select {
  margin-left: 10px;
  width: 40px;
  height: 35px;
  /* padding: 10px; */
}
.next {
  padding: 10px;
  margin: 10px;
  border: none;
  outline: none;
  cursor: pointer;
}
.next:hover {
  border: 1px solid black;
}
.prev {
  padding: 10px;
  margin: 10px;
  border: none;
  outline: none;
  cursor: pointer;
}
.prev:hover {
  border: 1px solid black;
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
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 2%;
  font-weight: 550;
  font-size: 18px;
}
</style>
