<template>
  <div>
    <h2>{{ countStore }}</h2>
    <div v-for="item in getData" :key="item.id">
      <div>{{ item.name }}</div>
      <button @click="editValue(item)">edit</button>
    </div>
    <button @click="increase">increase</button>
    <button @click="actionGetData">getdata</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      list: [],
      abc: "asd",
    };
  },
  computed: {
    countStore() {
      return this.$store.state.count;
    },
    getData() {
      return this.$store.state.value;
    },
  },
  methods: {
    increase() {
      this.$store.state.count++;
    },
    editValue(value) {
      this.$store.commit("editData", value);
      this.$router.push("/store");
    },
    ...mapActions(["actionGetData"]),
  },
};
</script>
<style scoped></style>
