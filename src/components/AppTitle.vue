<template>
  <div class="title">
    <h1 class="menu__title"> <strong>{{ titleText }}</strong></h1>
    <div class="menu__line"></div>
  </div>
</template>

<script>

export default {
  props: ['titleText']
}

</script>


<style scoped>
.menu__title {
  text-transform: uppercase;
  font-weight: 300;
  margin: 0;
  font-size: calc(1.375rem + 1.5vw);
}

.menu__line {
  height: 2px;
  background: #000;
  margin-top: 4px;
}
</style>