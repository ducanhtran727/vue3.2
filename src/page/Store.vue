<template>
  <div>
    <div>{{editValue}}</div>
  </div>
</template>

<script>
export default{
  computed:{
    editValue(){
      return this.$store.state.editItem
    }
  }
}

</script>

<style scoped>

</style>