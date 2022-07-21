<template>
  <div class="content__title">
    <h2 class="title__section1">{{title}}</h2>
    <div class="title__section2"></div>
  </div>
</template>  

<script>
export default{
  props:['title']
}
</script>

<style scoped>

.content__title{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
}

.title__section1{
  margin: 0 8px 8px 0;
  white-space: nowrap ;
  font-weight: 600;
  line-height: 1.2;
}

.title__section2{
  height: 1px;
  background-color: #888;
  flex: 1 0 0;
}


</style>