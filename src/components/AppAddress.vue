<template>
  <div class="address">
    <strong>Address:</strong>
    <p class="line">{{ address.str1 }}</p>
    <p class="line">{{ address.str2 }}</p>
    <p class="line">{{ address.str3 }}</p>
  </div>
</template>

<script>
export default {
  props: ['address'],
}
</script>

<style scoped>
strong {
  font-weight: bolder;
}

.line {
  margin: 0;
  padding: 0;
}
</style>