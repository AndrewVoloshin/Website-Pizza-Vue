<template>
<div class="overlay"></div>
</template>

<script>
export default {

}
</script>

<style scoped>
@media screen and (max-width: 768px){
  .overlay{
    position: fixed;
    top:0;
    left:0;
    width: 100vw;
    height: 100vh;
    display:flex;
    align-items: center ;
    justify-content: center;
    background: black;
    z-index: 100;
  }
  .overlay::after{
    content:'Please Switch to Portrait Mode';
    color: white;
    font-size: xx-large;
    padding-bottom: 40px;
  }
}
</style>