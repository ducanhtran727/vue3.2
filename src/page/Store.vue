<template>
  <div>
    <div>{{editValue}}</div>
  </div>
</template>

<script>
export default{
  computed:{
    editValue(){
      return this.$store.state.editValue
    }
  }
}

</script>

<style scoped>

</style>