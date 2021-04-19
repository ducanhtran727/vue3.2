<template>
  <div>
    <div v-if="loading">Loading ...</div>
    <div v-else class="box-table">
      <div class="boxFilter">
        <input
          type="text"
          v-model.number="searchValue"
          placeholder="searchPost Id"
        />
      </div>
      <div class="table">
        <div class="title-table">
          <div class="col-1">Name</div>
          <div class="col-3">Email</div>
          <div class="col-2">Id</div>
        </div>
        <RowTable
          v-for="(item, index) in contentPage"
          :key="index"
          :itemContent="item"
        ></RowTable>
        <div class="bot-table">
          <div>Items per Page</div>
          <select v-model.number="pagination.numberRow">
            <option
              :value="item.value"
              v-for="item in dropdownRow"
              :key="item.id"
              >{{ item.value }}</option
            >
          </select>
          <button class="prev" @click="prevPage" :disabled="prev">prev</button>
          <button class="next" @click="nextPage" :disabled="next">next</button>
          <div v-if="pagination.totalFilter">
            Total Filtered : {{ pagination.totalFilter }}
          </div>
          <div v-else>
            Page current : {{ pagination.currentPage + 1 }} /
            {{ pagination.totalPage }}
          </div>
        </div>
        <!-- <div>{{ dataContent }}</div> -->
      </div>
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
      loading: true,
      prev: true,
      next: false,
      searchValue: null,
      pagination: {
        currentPage: 0,
        totalPage: 50,
        numberRow: 0,
        totalFilter: null,
      },
      dropdownRow: [
        {
          id: 1,
          value: 5,
        },
        {
          id: 2,
          value: 10,
        },
      ],
    };
  },
  methods: {
    nextPage() {
      this.pagination.currentPage++;
    },
    prevPage() {
      this.pagination.currentPage--;
    },
    conditionChange() {
      if (this.pagination.currentPage === 0) {
        this.prev = true;
      } else {
        this.prev = false;
      }
      if (
        this.pagination.currentPage >=
        this.contentFilter.length / this.pagination.numberRow - 1
      ) {
        this.next = true;
      } else {
        this.next = false;
      }
    },
  },
  created() {
    const data = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        this.dataContent = res?.data;
        this.pagination = {
          currentPage: 0,
          numberRow: 10,
          totalPage: this.dataContent.length / 10,
          totalFilter: 0,
        };
        this.loading = false;
      } catch (err) {
        console.log(err);
      }
    };
    data();
  },
  watch: {
    "pagination.currentPage": function() {
      this.conditionChange();
    },
    "pagination.numberRow": function() {
      this.pagination.totalPage =
        this.dataContent.length / this.pagination.numberRow;
    },
    searchValue: function() {
      if (this.searchValue === "") {
        this.pagination.totalFilter = null;
        this.pagination.currentPage = 0;
      } else {
        this.pagination.totalFilter = this.contentFilter.length;
        this.pagination.currentPage = 0;
      }
      this.conditionChange();
    },
  },
  computed: {
    contentFilter() {
      return this.dataContent.filter((item) =>
        this.searchValue ? item.postId === this.searchValue : item
      );
    },
    contentPage() {
      const param1 = this.pagination.currentPage * this.pagination.numberRow;
      let param3 = param1 + this.pagination.numberRow;     
      return this.contentFilter.slice(param1, param3);
    },
  },
};
</script>
<style scoped>
.boxFilter {
  margin: 10px 0;
}
.box-table{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
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
