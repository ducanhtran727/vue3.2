<template>
    <div class="pageContainer">
        <h2>this is Page 2</h2>
    </div>
</template>
<script>
export default {
    props:['pageContent']
}
</script>
<style scoped>
.pageContainer{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>