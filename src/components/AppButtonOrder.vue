<template>
    <router-link tag="button" to="/" class="button-order" >GO TO CART</router-link>
</template>

<style scoped>
.button-order{
  position:fixed;
  left:0;
  bottom:0;
  width: 100%;
  background: #724cf9;
  z-index: 98;
  border:none;
  color:white;
  padding: 12px;
  cursor:pointer;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
}

.button-order:hover{
  background: #5a2ff3;
}

@media screen and (min-width:992px) {
  .button-order{
    display:none;
  }
}


</style>